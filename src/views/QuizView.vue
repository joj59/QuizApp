<script setup>
import { useRoute } from 'vue-router';
import { ref, defineProps, computed } from 'vue';
import qData from '../data/quizzes.json';

import QuizQuestion from '../components/QuizQuestion.vue';
import QuizHeader from '../components/QuizHeader.vue';
import QuizResult from '../components/QuizResult.vue';
const route = useRoute();
let quizId = +route.params.id;

const quiz = qData.find(q => +q.id === quizId);

const currentQuestionIndex = ref(0);

let questionStatus = computed(() => `${currentQuestionIndex.value + 1}/${quiz.questions.length}`);
const computedPercentage = computed(() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`);

const numberOfCorrectAnswers = ref(0);

const onOptionSelected = isCorrect => {
    if (isCorrect) {
        numberOfCorrectAnswers.value++;
    }

    if (quiz.questions.length - 1 === currentQuestionIndex.value) {
        showResults.value = true;
    }
    currentQuestionIndex.value++;
};

const showResults = ref(false);
</script>

<template>
    <section>
        <QuizHeader :questionStatus="questionStatus" :computedPercentage="computedPercentage" />
        <div>
            <QuizQuestion :question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected" v-if="!showResults" />
            <QuizResult :questionLength="quiz.questions.length" :numberOfCorrectAnswers="numberOfCorrectAnswers" v-else />
        </div>
    </section>
</template>

<style lang="scss">
section {
    width: 60%;
}
</style>

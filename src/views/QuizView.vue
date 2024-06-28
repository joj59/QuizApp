<script setup>
import { useRoute } from 'vue-router';
import { ref, watch, defineProps } from 'vue';
import qData from '../data/quizzes.json';

import Question from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue';
const route = useRoute();
let quizId = +route.params.id;

const quiz = qData.find(q => +q.id === quizId);

const currentQuestionIndex = ref(0);

let questionStatus = ` ${currentQuestionIndex.value}/${quiz.questions.length}`;

watch(currentQuestionIndex, () => {
    questionStatus = ` ${currentQuestionIndex.value}/${quiz.questions.length}`;
});
</script>

<template>
    <section>
        <QuizHeader :questionStatus="questionStatus" />
        <div>
            <Question :question="quiz.questions[currentQuestionIndex]" />
        </div>
        <button @click="currentQuestionIndex++">Next question ></button>
    </section>
</template>

<style lang="scss">
section {
    width: 60%;
}
</style>

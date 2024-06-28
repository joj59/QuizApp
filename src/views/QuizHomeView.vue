<script setup>
import { ref, watch, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';
//const {define} = defineProps(['']);
//const define = ref(define);
const router = useRouter();

import qData from '../data/quizzes.json';
import Card from '../components/Card.vue';

const quizzes = ref(qData);
const search = ref('');

const startQuiz = () => {
    console.log(router);
};

watch(search, () => {
    quizzes.value = qData.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
});
</script>
<template>
    <div class="container">
        <header>
            <h1>Quizzes</h1>
            <input v-model.trim="search" type="text" placeholder="Search..." />
        </header>
        <div class="options-container">
            <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" @click="startQuiz" />
        </div>
    </div>
</template>
<style lang="scss">
.container {
    width: 90%;

    header {
        margin: 3rem 0 1rem 0;
        display: flex;
        align-items: center;

        h1 {
            font-weight: bold;
            margin-right: 3rem;
        }
        input {
            height: 3rem;
            width: 30rem;
        }
    }

    .options-container {
        display: flex;
        flex-wrap: wrap;
        margin-top: 4rem;
    }
}
</style>

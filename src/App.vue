<script setup>
import { ref, watch } from 'vue';
import qData from './data/quizzes.json';

const quizzes = ref(qData);
const search = ref('');

watch(search, () => {
    quizzes.value = qData.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
});
</script>

<template>
    <main>
        <div class="container">
            <header>
                <h1>Quizzes</h1>
                <input v-model.trim="search" type="text" placeholder="Search..." />
            </header>
            <div class="options-container">
                <div v-for="quiz in quizzes" :key="quiz.id" class="card">
                    <img :src="quiz.img" alt="" />
                    <div class="card-text">
                        <h2>{{ quiz.name }}</h2>
                        <p>{{ quiz.questions.length }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
main {
    display: flex;
    justify-content: center;
    width: 100vw;
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

            .card {
                width: 30rem;
                overflow: hidden;
                border-radius: 2%;
                box-shadow: 0.1rem 0.1rem 1rem rgb(94, 94, 94);
                margin: 0 2rem 3rem 0;
                cursor: pointer;

                .card-text {
                    padding: 0.5rem;
                }
            }
        }
    }
}
</style>

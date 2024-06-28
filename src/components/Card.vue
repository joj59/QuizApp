<script setup>
import { defineProps } from 'vue';

const { quiz } = defineProps(['quiz']);
</script>

<template>
    <div class="card">
        <img :src="quiz.img" alt="image" />
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }}</p>
        </div>
    </div>
</template>

<style lang="scss">
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
</style>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, watch, defineProps, computed, reactive, defineEmits } from 'vue';
const { questionLength, numberOfCorrectAnswers } = defineProps(['questionLength', 'numberOfCorrectAnswers']);
// const define = ref(define);
// const define = computed(() => {});
</script>

<template>
    <div class="results">
        <p>Your results</p>
        <h1>{{ numberOfCorrectAnswers }}/{{ questionLength }}</h1>
        <RouterLink to="/" class="router-button">Go Back</RouterLink>
    </div>
</template>

<style lang="scss">
.results {
    text-align: center;
    padding: 10rem 0;

    p {
        font-size: 2.5rem;
    }
    h1 {
        margin-bottom: 5rem;
    }
    .router-button {
        font-size: 2rem;
        padding: 2rem 1rem;
        border: 0.1rem solid black;
    }
}
</style>

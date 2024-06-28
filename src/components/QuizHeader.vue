<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch, defineProps } from 'vue';
const { questionStatus } = defineProps(['questionStatus']);
// const define = ref(define);
</script>

<template>
    <header>
        <h3>Question {{ questionStatus }}</h3>
        <div class="bar">
            <div class="completion"></div>
        </div>
    </header>
</template>

<style lang="scss">
header {
    margin-top: 2rem;

    .bar {
        border: 0.2rem solid red;
        height: 5vh;
        margin: 1rem;

        .completion {
            height: 100%;
            width: 0%;
            background-color: greenyellow;
        }
    }

    .question-container {
        margin-top: 2rem;

        .question {
            margin-bottom: 2rem;
        }
    }
}
</style>

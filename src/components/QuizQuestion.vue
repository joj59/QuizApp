<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch, defineProps, defineEmits } from 'vue';
const { question } = defineProps(['question']);

const emit = defineEmits(['selectOption']);

const emitSelectedOption = isCorrect => {
    emit('selectOption', isCorrect);
};

// const define = ref(define);
</script>

<template>
    <div class="quiz-container">
        <div class="question-container">
            <h1 class="question">{{ question.text }}</h1>
        </div>
        <div class="options-container">
            <div class="option" v-for="option in question.options" :key="option.id" @click="emitSelectedOption(option.isCorrect)">
                <p class="option-label">{{ option.label }}</p>
                <div class="option-value">
                    <p>{{ option.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.quiz-container {
    .options-container {
        .option {
            display: flex;
            margin-bottom: 2rem;
            cursor: pointer;

            .option-label {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 3rem;
                padding: 1rem 1.5rem;
                margin-right: 1rem;
                background-color: lightcoral;
                font-weight: bold;
            }
            .option-value {
                background-color: salmon;
                width: 100%;
                display: flex;
                align-items: center;
                padding: 1rem;

                p {
                    font-size: 3rem;
                }
            }
        }
    }
}
</style>

import { createRouter, createWebHistory } from 'vue-router';
import QuizHomeView from '../views/QuizHomeView.vue';
import QuizView from '../views/QuizView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'quizHome',
            component: QuizHomeView,
        },
        {
            path: '/quiz/:id',
            name: 'quiz',
            component: QuizView,
        },
    ],
});

export default router;

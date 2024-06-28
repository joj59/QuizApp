import { createRouter, createWebHistory } from 'vue-router';
import QuizHomeView from '../views/QuizHomeView.vue';
import QuizTestView from '../views/QuizTestView.vue';

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
            name: 'quizTest',
            component: QuizTestView,
        },
    ],
});

export default router;

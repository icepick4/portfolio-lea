import { createRouter, createWebHistory } from 'vue-router';
import Cv from '../views/Cv.vue';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import SingleProject from '../views/SingleProject.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'accueil',
            component: Home
        },
        {
            path: '/travaux',
            name: 'projects',
            component: Projects
        },
        {
            path: '/travaux/:id',
            name: 'SingleProject',
            component: SingleProject
        },
        {
            path: '/cv',
            name: 'Cv',
            component: Cv
        }
    ]
});

export default router;

<script lang="ts">
import { defineComponent } from 'vue';
import { projects } from '../utils';
export default defineComponent({
    name: 'Projects',
    setup() {
        const colors = ['orange', 'pink', 'yellow'];
        const randomizeColor = (id: number) => {
            if (id % 3 === 0) {
                return colors[0];
            } else if (id % 3 === 1) {
                return colors[1];
            } else {
                return colors[2];
            }
        };
        return { projects, randomizeColor };
    },
    mounted() {
        document.body.scrollTo(0, 0);
    }
});
</script>

<template>
    <RouterLink
        to="/"
        class="text-xl font-bold border-4 rounded-2xl border-black p-2 px-4 mt-4 hover:bg-black hover:text-white transition-all duration-300 mb-16"
    >
        Retour à la l'accueil
    </RouterLink>
    <div
        class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10 w-11/12 h-full content-center"
    >
        <RouterLink
            v-for="project in projects"
            :key="project.id"
            :to="{
                name: 'SingleProject',
                params: {
                    id: project.id
                }
            }"
            class="flex flex-col justify-between p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:-translate-y-2 place-self-center w-full h-full group hover:brightness-90"
            :class="randomizeColor(project.id)"
        >
            <div>
                <h1 class="text-2xl font-bold font-title">
                    {{ project.title }}
                </h1>
                <p class="text-black" v-html="project.description"></p>
            </div>
            <div class="flex justify-end">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-500 group-hover:text-gray-800 group-hover:scale-125 group-hover:rotate-90 transition duration-300 ease-in-out"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </div>
        </RouterLink>
    </div>
</template>

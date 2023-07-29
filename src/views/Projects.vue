<script setup lang="ts">
import { onMounted } from 'vue';
import { projects } from '../utils';

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

onMounted(() => {
    document.body.scrollTo(0, 0);
});
</script>

<template>
    <div class="flex flex-col gap-10 w-full justify-center items-center mb-10">
        <h1 class="font-title text-6xl">Réalisations</h1>
        <p class="text-gray-500 font-medium text-lg w-1/2 text-center">
            Trouvez une sélection de projets réalisés tout au long de mon
            parcours (design graphique, photographie, identité visuelle...)
        </p>
    </div>

    <div
        class="grid grid-cols-2 md:grid-cols-3 w-5/6 h-full content-center gap-10 mb-10"
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
            class="rounded-lg w-full h-full"
            :class="randomizeColor(project.id)"
        >
            <img
                :src="`/projects/${project.image}/logo.png`"
                class="w-full h-full object-contain mx-auto"
            />
        </RouterLink>
    </div>
</template>

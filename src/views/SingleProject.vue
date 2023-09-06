<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Project from '../components/Project.vue';
import { projects } from '../utils';

const route = useRoute();
if (!route.params.id) {
    throw new Error('No id provided');
} else if (typeof route.params.id !== 'string') {
    throw new Error('Id is not a string');
}
const id: number = parseInt(route.params.id);

onMounted(() => {
    document.body.scrollTo(0, 0);
});
</script>

<template>
    <div
        class="flex flex-col items-center justify-between w-full text-black gap-10"
    >
        <Project
            :title="projects[id - 1].title"
            :description="projects[id - 1].description"
            :component="projects[id - 1].component"
            :themes="projects[id - 1].themes"
        />
        <RouterLink
            to="/travaux"
            class="text-xl font-bold border-2 rounded-2xl border-black p-2 px-4 mt-4 hover:scale-110 transition-all duration-300"
        >
            Retour aux réalisations
        </RouterLink>
    </div>
</template>

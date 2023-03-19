<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Project from '../components/Project.vue';
import { projects } from '../utils';
export default defineComponent({
    name: 'SingleProject',
    setup() {
        const route = useRoute();
        if (!route.params.id) {
            throw new Error('No id provided');
        } else if (typeof route.params.id !== 'string') {
            throw new Error('Id is not a string');
        }
        const id: number = parseInt(route.params.id);
        return { id, projects };
    },
    components: { Project }
});
</script>

<template>
    <div
        class="flex flex-col items-center justify-center w-full text-black gap-10"
    >
        <Project
            :title="projects[id - 1].title"
            :description="projects[id - 1].description"
            :component="projects[id - 1].component"
        />
        <RouterLink
            to="/travaux"
            class="text-xl font-bold border-4 rounded-2xl border-black p-2 px-4 mt-4 hover:bg-black hover:text-white transition-all duration-300 mb-16"
        >
            Retour aux réalisations
        </RouterLink>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeArtistes from './projects/LeArtistes.vue';
export default defineComponent({
    name: 'Project',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        component: {
            type: String,
            required: true
        }
    },
    components: { LeArtistes }
});
</script>

<template>
    <div
        class="flex flex-col items-center justify-center w-full text-black gap-10"
    >
        <h1 class="text-7xl font-bold font-title">{{ title }}</h1>
        <p>{{ description }}</p>
        <component :is="component" />
    </div>
</template>

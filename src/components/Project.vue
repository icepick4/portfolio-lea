<script lang="ts">
import { defineComponent } from 'vue';
import AffichesMinimalistes from './projects/AffichesMinimalistes.vue';
import ChatMotion from './projects/ChatMotion.vue';
import Enora from './projects/Enora.vue';
import LeArtistes from './projects/LeArtistes.vue';
import Polaroid from './projects/Polaroid.vue';
import VivreDAmour from './projects/VivreDAmour.vue';

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
    components: {
        LeArtistes,
        VivreDAmour,
        ChatMotion,
        AffichesMinimalistes,
        Enora,
        Polaroid
    }
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

<script lang="ts">
import { defineComponent } from 'vue';
import AffichesMinimalistes from './projects/AffichesMinimalistes.vue';
import ChatMotion from './projects/ChatMotion.vue';
import CocaColaLife from './projects/CocaColaLife.vue';
import Enora from './projects/Enora.vue';
import LeArtistes from './projects/LeArtistes.vue';
import Logofolio from './projects/Logofolio.vue';
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
        Polaroid,
        CocaColaLife,
        Logofolio
    }
});
</script>

<template>
    <div
        class="flex flex-col items-center justify-center w-full text-black gap-10"
    >
        <h1
            class="text-4xl font-bold font-title text-center sm:text-6xl lg:text-7xl"
        >
            {{ title }}
        </h1>
        <p class="m-10 w-5/6 lg:w-1/3 text-center" v-html="description"></p>
        <component :is="component" />
    </div>
</template>

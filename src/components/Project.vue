<script setup lang="ts">
import type { Component } from 'vue';
import AffichesMinimalistes from './projects/AffichesMinimalistes.vue';
import Boomerang from './projects/Boomerang.vue';
import ChatMotion from './projects/ChatMotion.vue';
import CocaColaLife from './projects/CocaColaLife.vue';
import Enora from './projects/Enora.vue';
import Fanzine from './projects/Fanzine.vue';
import LeArtistes from './projects/LeArtistes.vue';
import Logofolio from './projects/Logofolio.vue';
import Polaroid from './projects/Polaroid.vue';
import VeggyHunt from './projects/VeggyHunt.vue';
import VivreDAmour from './projects/VivreDAmour.vue';

defineProps<{
    title: string;
    description: string;
    component: string;
    themes: string[];
}>();

const components: Record<string, Component> = {
    AffichesMinimalistes,
    ChatMotion,
    CocaColaLife,
    Enora,
    LeArtistes,
    Logofolio,
    Polaroid,
    VivreDAmour,
    VeggyHunt,
    Boomerang,
    Fanzine
};
</script>

<template>
    <div
        class="flex flex-col items-center justify-center w-full text-black gap-3"
    >
        <h1
            class="text-4xl font-bold font-title text-center sm:text-6xl lg:text-7xl"
        >
            {{ title }}
        </h1>
        <p
            class="m-10 w-5/6 lg:w-2/3 text-center text-lg"
            v-html="description"
        ></p>
        <div class="flex flex-col lg:flex-row gap-10 mb-10">
            <div
                class="border-2 border-black rounded-lg"
                v-for="theme in themes"
                :key="theme"
            >
                <p class="p-1 sm:px-5 text-gray-500 font-semibold text-center">
                    {{ theme }}
                </p>
            </div>
        </div>
        <component :is="components[component]" />
    </div>
</template>

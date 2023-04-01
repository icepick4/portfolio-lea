<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AffichesMinimalistes'
});
</script>

<template>
    <div class="grid grid-cols-2 grid-rows-1 gap-10 w-3/5">
        <img
            v-for="i in 2"
            :key="i"
            :src="`/portfolio-lea/assets/affiches-minimalistes/${i}.jpg`"
            class="w-auto h-auto object-cover"
        />
    </div>
    <div class="grid grid-cols-2 grid-rows-2 gap-10 w-3/5">
        <img
            v-for="i in 4"
            :key="i"
            :src="`/portfolio-lea/assets/affiches-minimalistes/${i + 2}.jpg`"
            class="w-auto h-auto object-cover"
        />
    </div>
    <h1 class="text-xl">Mise en situation des affiches</h1>
    <div
        class="grid grid-cols-2 grid-rows-1 gap-5 w-3/5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
    >
        <img
            v-for="i in 6"
            :key="i"
            :src="`/portfolio-lea/assets/affiches-minimalistes/ideas/${i}.jpg`"
            class="w-auto h-auto object-cover"
        />
    </div>
</template>

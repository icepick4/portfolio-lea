<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AffichesMinimalistes'
});
</script>

<template>
    <div class="sm:grid hidden grid-cols-5 grid-rows-2 gap-3 w-5/6">
        <img
            v-for="i in 6"
            :key="i"
            :src="`/portfolio-lea/projects/affiches-minimalistes/${i}.jpg`"
            class="h-full w-full object-center object-cover"
            :class="i != 2 && i != 5 ? 'col-span-2' : 'col-span-1'"
        />
    </div>
    <div
        class="sm:hidden flex flex-col gap-5 w-full justify-center items-center"
    >
        <img
            v-for="i in 6"
            :key="i"
            :src="`/portfolio-lea/projects/affiches-minimalistes/${i}.jpg`"
            class="w-5/6 h-auto object-cover"
        />
    </div>
    <h1 class="text-xl text-center">Mise en situation des affiches</h1>
    <div
        class="grid grid-cols-2 grid-rows-1 gap-5 w-3/5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
    >
        <img
            v-for="i in 6"
            :key="i"
            :src="`/portfolio-lea/projects/affiches-minimalistes/ideas/${i}.jpg`"
            class="w-auto h-full object-cover"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Enora'
});
</script>

<template>
    <img
        src="/projects/enora/1.png"
        class="h-auto object-cover w-5/6 lg:w-1/2"
    />
    <div
        class="grid grid-cols-2 grid-rows-1 gap-3 w-5/6 lg:w-1/2 lg:grid-cols-4 md:grid-cols-4"
    >
        <img
            v-for="i in 4"
            :key="i"
            :src="`/portfolio-lea/projects/enora/${i + 1}.png`"
            class="w-auto h-auto object-cover"
        />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 w-5/6 lg:w-1/2 gap-3">
        <img
            v-for="i in 3"
            :key="i"
            :src="`/portfolio-lea/projects/enora/${i + 5}.png`"
            class=""
        />
    </div>
</template>

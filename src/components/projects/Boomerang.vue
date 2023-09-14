<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Boomerang'
});
</script>

<template>
    <img
        src="/projects/boomerang/computer.png"
        alt="boomerang"
        class="w-5/6 h-auto object-contain"
    />
    <div
        class="flex flex-col lg:flex-row gap-5 w-full justify-center items-center"
    >
        <img
            v-for="n in 3"
            :key="n"
            :src="`/portfolio-lea/projects/boomerang/${n}.png`"
            class="w-3/4 md:w-1/3 h-3/4 object-contain"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Fanzine'
});
</script>
<template>
    <img
        src="/projects/fanzine/main.jpeg"
        class="h-96 xl:h-1/2 object-cover w-full px-32 mb-5"
    />
    <div
        class="w-full px-32 flex flex-col xl:flex-row justify-between items-center gap-5 xl:gap-1"
    >
        <img
            v-for="i in 7"
            :key="i"
            :src="`/portfolio-lea/projects/fanzine/${i}.png`"
            class="h-auto xl:h-32 2xl:h-40 w-1/2 xl:w-auto object-cover"
        />
        <!--3-1-3-->
    </div>
</template>

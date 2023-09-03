<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Fanzine'
});
</script>
<template>
    <img
        :src="'/projects/fanzine/main.jpeg'"
        class="h-96 xl:h-1/2 object-cover w-11/12 xl:w-3/4"
    />
    <div
        class="w-5/6 lg:w-3/4 flex flex-col xl:flex-row justify-between items-center gap-5 xl:gap-1"
    >
        <img
            v-for="i in 7"
            :key="i"
            :src="`/projects/fanzine/${i}.png`"
            class="h-auto xl:h-28 2xl:h-32 w-1/2 xl:w-auto object-cover"
        />
    </div>
</template>

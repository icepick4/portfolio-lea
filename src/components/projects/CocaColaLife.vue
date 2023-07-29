<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CocaColaLife'
});
</script>

<template>
    <div
        class="grid grid-cols-1 grid-rows-1 gap-5 w-1/2 lg:grid-cols-3 lg:w-5/6"
    >
        <img
            v-for="i in 3"
            :key="i"
            :src="`/projects/cocacola-life/${i}.jpg`"
            class="w-full h-auto object-cover"
        />
    </div>
</template>

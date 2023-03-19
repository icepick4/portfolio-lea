<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CocaColaLife'
});
</script>

<template>
    <div class="grid grid-cols-3 grid-rows-1 gap-5">
        <img
            v-for="i in 3"
            :key="i"
            :src="`/src/assets/cocacola-life/${i}.jpg`"
            class="w-auto h-auto object-cover"
        />
    </div>
</template>

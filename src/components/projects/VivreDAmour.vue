<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VivreDAmour'
});
</script>

<template>
    <div class="grid grid-cols-4 grid-rows-2 gap-5 mx-20">
        <img
            v-for="i in 8"
            :key="i"
            :src="`/src/assets/vivre-d-amour/${i}.jpg`"
            class="w-auto h-auto object-cover col-span-1"
        />
    </div>
</template>

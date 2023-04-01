<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VivreDAmour'
});
</script>

<template>
    <div
        class="grid grid-cols-2 grid-rows-2 gap-5 mx-20 lg:grid-cols-4 sm:grid-cols-3 w-3/4"
    >
        <img
            v-for="i in 8"
            :key="i"
            :src="`/assets/vivre-d-amour/${i}.jpg`"
            class="w--auto h-auto object-cover col-span-1"
        />
    </div>
</template>

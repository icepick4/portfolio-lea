<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Logofolio'
});
</script>

<template>
    <div
        class="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4"
    >
        <img
            v-for="i in 6"
            :key="i"
            :src="`/projects/logofolio/${i}.jpg`"
            class="w-auto h-auto object-cover"
        />
    </div>
</template>

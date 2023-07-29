<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Enora'
});
</script>

<template>
    <img :src="'/projects/enora/1.jpg'" class="h-auto object-cover w-1/2" />
    <div
        class="grid grid-cols-2 grid-rows-1 gap-5 w-1/2 lg:grid-cols-5 md:grid-cols-4"
    >
        <img
            v-for="i in 5"
            :key="i"
            :src="`/projects/enora/${i + 1}.jpg`"
            class="w-auto h-auto object-cover"
        />
    </div>
</template>

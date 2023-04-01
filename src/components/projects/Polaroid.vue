<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Polaroid'
});
</script>

<template>
    <div class="flex flex-col w-5/6 gap-10">
        <video autoplay loop muted class="w-full h-full object-cover">
            <source src="/assets/polaroid/video.mp4" type="video/mp4" />
        </video>
        <div class="grid grid-cols-1 grid-rows-1 gap-5 w-full sm:grid-cols-2">
            <img
                v-for="i in 2"
                :key="i"
                :src="`/assets/polaroid/${i}.jpg`"
                class="w-auto h-auto object-cover"
            />
        </div>
    </div>
</template>

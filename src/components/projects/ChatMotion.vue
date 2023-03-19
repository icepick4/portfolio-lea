<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ChatMotion'
});
</script>

<template>
    <div class="grid grid-cols-2 grid-rows3 gap-5 w-4/6 sm:w-2/3 lg:w-1/2">
        <video autoplay muted loop class="col-span-2 w-full">
            <source
                src="/src/assets/chatmotion/chatmotion.mp4"
                type="video/mp4"
            />
        </video>
        <img
            src="/src/assets/chatmotion/1.jpg"
            class="w-full h-auto object-cover"
        />
        <img
            src="/src/assets/chatmotion/2.jpg"
            class="w-full h-auto object-cover"
        />
        <span>Mode jour</span>
        <span>Mode nuit</span>
    </div>
</template>

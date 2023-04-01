<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LeArtistes'
});
</script>

<template>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-10 m-10"
    >
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 col-span-full">
            <img
                v-for="i in 3"
                :key="i"
                :src="`/assets/leartistes/${i}.jpg`"
                alt="placeholder"
                class="w-full h-full object-cover"
            />
        </div>
        <img
            v-for="i in 4"
            :key="i"
            :src="`/assets/leartistes/${i + 3}.jpg`"
            alt="placeholder"
            class="w-full h-full object-cover"
        />
    </div>
    <h1 class="text-2xl text-center">Idées de déclinaison des illustrations</h1>
    <div
        class="grid grid-cols-1 grid-row gap-5 m-10 xl:grid-cols-7 md:grid-cols-4 sm:grid-cols-2"
    >
        <img
            v-for="i in 7"
            :key="i"
            :src="`/assets/leartistes/ideas/${i}.jpg`"
            alt="placeholder"
            class="w-full h-full object-cover"
        />
    </div>
</template>

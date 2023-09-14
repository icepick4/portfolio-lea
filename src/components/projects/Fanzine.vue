<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Fanzine'
});
</script>
<template>
    <div class="flex flex-col gap-4">
        <img
            src="/projects/fanzine/main.jpeg"
            class="object-cover w-full px-10 2xl:px-28 h-[35rem]"
        />
        <div
            class="hidden xl:flex w-full px-10 2xl:px-28 flex-col md:flex-row justify-between items-center gap-5"
        >
            <img
                v-for="i in 7"
                :key="i"
                :src="`/portfolio-lea/projects/fanzine/${i}.png`"
                class="h-32 object-cover"
            />
        </div>
        <div
            class="flex xl:hidden w-full px-10 2xl:px-28 flex-col justify-between items-center gap-5"
        >
            <div
                class="flex flex-col sm:flex-row sm:w-full justify-center gap-5"
            >
                <img
                    v-for="i in 3"
                    :key="i"
                    :src="`/portfolio-lea/projects/fanzine/${i}.png`"
                    class="h-32 object-cover"
                />
            </div>
            <img src="/projects/fanzine/4.png" class="h-32 object-cover" />
            <div
                class="flex flex-col sm:flex-row sm:w-full justify-center gap-5"
            >
                <img
                    v-for="i in 3"
                    :key="i"
                    :src="`/portfolio-lea/projects/fanzine/${i + 4}.png`"
                    class="h-32 object-cover"
                />
            </div>
        </div>
    </div>
</template>

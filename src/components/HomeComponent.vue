<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    color: string;
    character: string;
    title: string;
    description?: string;
    link?: string;
    linkText?: string;
}>();

const splitText = computed(() => {
    if (props.description != null) {
        return props.description.split('\n');
    }
});
</script>

<template>
    <div
        class="w-screen h-screen flex items-center justify-center select-none relative"
        :class="color"
    >
        <div
            class="flex flex-col items-center justify-between w-full h-2/3 sm:h-2/3 text-white gap-10"
        >
            <div
                class="flex flex-col gap-5 md:gap-20 justify-center items-center"
            >
                <h1
                    class="text-2xl lg:text-5xl font-bold text-center lg:leading-snug"
                    v-html="title"
                ></h1>
                <div v-if="link != null && description != null">
                    <RouterLink
                        :to="link"
                        class="text-lg lg:text-xl font-bold border-4 rounded-2xl border-white p-2 px-4 lg:px-8 mt-4 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        {{ linkText }}
                    </RouterLink>
                </div>
            </div>
            <div
                class="flex flex-col gap-5 md:gap-20 justify-center items-center"
            >
                <div v-if="link != null && description == null">
                    <RouterLink
                        :to="link"
                        class="text-lg lg:text-xl font-bold border-4 rounded-2xl border-white p-2 px-4 lg:px-8 mt-4 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        {{ linkText }}
                    </RouterLink>
                </div>
                <div
                    v-if="description != null"
                    class="flex flex-col items-center w-5/6 md:w-1/2 p-2 md:p-10"
                >
                    <p
                        v-for="(word, index) in splitText"
                        :key="index"
                        class="text-base lg:text-xl text-center"
                    >
                        {{ word }}
                    </p>
                </div>
            </div>
            <img
                :src="'/portfolio-lea/assets/characters/' + character + '.png'"
                alt="hero"
                class="w-2/5 sm:w-1/3 mx-auto lg:w-64 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    </div>
</template>

<style scoped>
.red {
    background-color: #ff8e99;
}
.blue {
    background-color: #7fcdc5;
}

.green {
    background-color: #94dcaa;
}
</style>

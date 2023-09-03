<script setup lang="ts">
const props = defineProps<{
    color: string;
    character: string;
    title: string;
    link?: string;
    linkText?: string;
}>();

const _ = ['bg-blue', 'bg-green', 'bg-purple'];
</script>

<template>
    <div
        class="w-screen h-screen flex items-center justify-center select-none"
        :class="`bg-${color}`"
    >
        <div
            class="flex flex-col items-center justify-end w-full h-2/3 sm:h-2/3 text-black gap-10"
        >
            <div
                class="flex flex-col gap-5 md:gap-20 justify-center items-center"
            >
                <h1
                    class="text-2xl lg:text-5xl font-bold text-center lg:leading-snug"
                    v-html="title"
                ></h1>
            </div>
            <div
                class="flex flex-col gap-5 md:gap-20 justify-center items-center"
            >
                <div v-if="link">
                    <RouterLink
                        :to="link"
                        class="text-lg lg:text-xl font-bold border-2 rounded-2xl border-black p-2 px-4 lg:px-8 mt-4 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        {{ linkText }}
                    </RouterLink>
                </div>
            </div>
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

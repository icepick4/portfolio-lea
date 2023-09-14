<script setup lang="ts">
defineProps<{
    character: string;
    title: string;
    link?: string;
    linkText?: string;
}>();
</script>

<template>
    <div class="w-screen h-screen flex items-center justify-center select-none">
        <div
            class="flex flex-col items-center justify-end w-full h-2/3 text-black gap-1 sm:gap-5"
        >
            <div
                class="flex flex-col gap-5 md:gap-20 justify-center items-center"
            >
                <h1
                    class="text-xl lg:text-5xl font-bold text-center lg:leading-snug"
                    v-html="title"
                ></h1>
            </div>
            <div
                class="flex flex-col gap-5 md:gap-20 justify-center items-center"
            >
                <div v-if="link">
                    <RouterLink :to="link">
                        <div
                            class="text-lg lg:text-xl font-bold border-2 rounded-2xl border-black p-2 px-4 lg:px-8 hover:text-black hover:scale-110 transition-all duration-300"
                        >
                            {{ linkText }}
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

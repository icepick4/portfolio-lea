<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
    title: string;
    list: string[] | null;
    color: string;
    character: string;
}>();

const isHovered = ref(false);
const colorClass = `bg-${props.color}`;

const _ = ['bg-orange', 'bg-yellow', 'bg-pink'];

const isClickable = computed(() => {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        return true;
    } else {
        return false;
    }
});
</script>

<template>
    <div
        class="flex justify-center items-center w-5/6 lg:w-full h-full"
        @mouseover="isClickable ? null : (isHovered = true)"
        @mouseleave="isClickable ? null : (isHovered = false)"
        @click="isClickable ? (isHovered = !isHovered) : null"
    >
        <div
            :class="{
                card: true,
                'is-flipped': !isHovered,
                [colorClass]: true
            }"
            class="h-full rounded-[35px]"
        >
            <div
                class="absolute w-full h-full front flex flex-col items-center justify-center"
            >
                <h2
                    class="text-3xl font-bold font-title absolute top-8 lg:top-12"
                >
                    {{ title }}
                </h2>
                <ul
                    v-if="list"
                    class="flex flex-col gap-3 w-full sm:w-5/6 h-auto mt-16"
                >
                    <div v-for="i in Math.ceil(list.length / 2)" :key="i">
                        <li
                            :class="
                                (i * 2 - 2) % 2 === 0
                                    ? 'font-bold text-base sm:text-lg'
                                    : 'font-normal text-sm sm:text-base'
                            "
                            class="text-center m-0"
                            v-html="list[i * 2 - 2]"
                        ></li>
                        <li
                            :class="
                                (i * 2 - 1) % 2 === 0
                                    ? 'font-bold text-lg'
                                    : 'font-normal text-base'
                            "
                            class="text-center m-0"
                            v-html="list[i * 2 - 1]"
                        ></li>
                    </div>
                </ul>
                <div
                    v-if="!list"
                    class="grid grid-cols-2 grid-rows-3 gap-5 mt-16"
                >
                    <img
                        v-for="i in 6"
                        :key="i"
                        :src="`/portfolio-lea/cv/logos/${i}.png`"
                        class="w-auto h-24 lg:h-32 object-cover"
                    />
                </div>
            </div>
            <div
                class="absolute w-full h-full back flex flex-col items-center justify-evenly"
            >
                <h2 class="text-3xl font-bold font-title top-7 lg:top-12">
                    {{ title }}
                </h2>
                <img
                    :src="`/portfolio-lea/characters/${character}.png`"
                    class="w-4/6 h-auto"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
}

.card {
    width: 400px;
    height: 600px;
    transition: transform 0.5s ease;
    transform-style: preserve-3d;
}

@media (max-width: 768px) {
    .card {
        width: 350px;
        height: 500px;
    }
}

.card.is-flipped {
    transform: rotateY(180deg) scale(0.9);
}

.card .front {
    backface-visibility: hidden;
}

.card .back {
    backface-visibility: hidden;
    transform: rotateY(180deg);
}
</style>

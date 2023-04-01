<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'SkillCard',
    props: {
        title: {
            type: String,
            required: true
        },
        list: {
            type: Array as () => string[] | null,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        character: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const isHovered = ref(false);
        const colorClass = `${props.color}`;

        return { isHovered, colorClass };
    }
});
</script>

<template>
    <div
        class="flex justify-center items-center w-full h-full"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
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
                <h2 class="text-3xl font-bold font-title absolute top-12">
                    {{ title }}
                </h2>
                <ul v-if="list" class="flex flex-col gap-2 w-4/6 h-auto mt-16">
                    <div v-for="i in list.length" :key="i">
                        <li :class="i % 2 != 0 ? 'list-disc' : 'list-none'">
                            {{ list[i - 1] }}
                        </li>
                    </div>
                </ul>
                <div
                    v-if="!list"
                    class="grid grid-cols-2 grid-rows-3 gap-5 mt-16"
                >
                    <img
                        v-for="i in 6"
                        :key="i"
                        :src="`/assets/cv/logos/${i}.png`"
                        class="w-auto h-32 object-cover"
                    />
                </div>
            </div>
            <div
                class="absolute w-full h-full back flex flex-col items-center justify-evenly"
            >
                <h2 class="text-3xl font-bold font-title">{{ title }}</h2>
                <img
                    :src="`/assets/characters/${character}.png`"
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

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
                'is-flipped': !isHovered
            }"
            class="h-full"
        >
            <div class="absolute w-full h-full front">
                <h2 class="text-2xl font-bold">{{ title }}</h2>
                <ul v-if="list" class="flex flex-col gap-2 m-10">
                    <div v-for="i in list.length" :key="i">
                        <li :class="i % 2 != 0 ? 'list-disc' : 'list-none'">
                            {{ list[i - 1] }}
                        </li>
                    </div>
                </ul>
                <div
                    v-if="!list"
                    class="grid grid-cols-2 grid-rows-3 gap-5 m-6"
                >
                    <img
                        v-for="i in 6"
                        :key="i"
                        :src="`/src/assets/cv/logos/${i}.png`"
                        class="w-auto h-auto object-cover"
                    />
                </div>
            </div>
            <div class="absolute w-full h-full back">
                <h2 class="text-2xl font-bold">{{ title }}</h2>
                <img
                    :src="`/src/assets/characters/${character}.png`"
                    class="w-4/6 h-auto"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.orange {
    background-color: #ff8c4f;
}

.pink {
    background-color: #fd2b58;
}

.yellow {
    background-color: #ffe488;
}
.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}

.card {
    width: 300px;
    height: 300px;
    transition: transform 0.5s ease;
    transform-style: preserve-3d;
}

.card.is-flipped {
    transform: rotateX(180deg);
}

.card .front {
    backface-visibility: hidden;
}

.card .back {
    backface-visibility: hidden;
    transform: rotateX(180deg);
}
</style>

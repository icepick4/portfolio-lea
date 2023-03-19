<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeComponent',
    props: {
        color: {
            type: String,
            required: true
        },
        character: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        link: {
            type: String,
            required: false
        },
        linkText: {
            type: String,
            required: false
        }
    },
    setup(props) {
        const splitText = computed(() => {
            if (props.description != null) {
                return props.description.split('\n');
            }
        });
        return { splitText };
    }
});
</script>

<template>
    <div
        class="w-screen h-screen flex items-center justify-center"
        :class="color"
    >
        <div
            class="flex flex-col items-center justify-center w-full text-white gap-10"
        >
            <h1
                class="text-5xl font-bold text-center leading-normal"
                v-html="title"
            ></h1>
            <div v-if="link">
                <RouterLink
                    :to="link"
                    class="text-xl font-bold border-4 rounded-2xl border-white p-4 px-8 mt-4 hover:bg-white hover:text-black transition-all duration-300"
                >
                    {{ linkText }}
                </RouterLink>
            </div>
            <img
                :src="'/src/assets/characters/' + character + '.png'"
                alt="hero"
                class="w-2/6 mx-auto lg:w-1/6"
            />
            <div
                v-if="description != null"
                class="flex flex-col items-center w-5/6"
            >
                <p
                    v-for="(word, index) in splitText"
                    :key="index"
                    class="text-xl text-center"
                >
                    {{ word }}
                </p>
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

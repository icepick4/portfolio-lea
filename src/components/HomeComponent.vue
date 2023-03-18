<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeComponent',
    setup() {
        return {};
    },
    props: {
        color: {
            type: String,
            required: true
        },
        character: {
            type: String,
            required: true
        }
    }
});
</script>

<template>
    <div
        class="w-full h-screen flex items-center justify-center"
        :class="color"
    >
        <img
            :src="'/src/assets/characters/' + character + '.png'"
            alt="hero"
            class="w-1/6 mx-auto"
        />
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

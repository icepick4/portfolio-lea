<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SingleProject',
    setup() {
        return {};
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    }
});
</script>

<template>
    <p>{{ id }}</p>
</template>

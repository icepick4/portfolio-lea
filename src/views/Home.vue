<script lang="ts">
import { defineComponent } from 'vue';
import HomeComponent from '../components/HomeComponent.vue';
export default defineComponent({
    name: 'Home',
    setup() {
        return {};
    },
    components: { HomeComponent }
});
</script>

<template>
    <div class="flex flex-col">
        <HomeComponent color="green" character="ondulés" />
        <HomeComponent color="red" character="chignons" />
        <HomeComponent color="blue" character="couronne" />
    </div>
</template>

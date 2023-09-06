<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

const route = useRoute();
const isHome = ref(route.path === '/');
watch(
    () => route.path,
    (newPath: string) => {
        isHome.value = newPath === '/';
    }
);
</script>

<template>
    <div class="flex flex-col h-screen">
        <Header />
        <div
            class="flex justify-center items-center flex-grow flex-col"
            :class="isHome ? 'pt-0' : 'pt-24'"
        >
            <RouterView />
        </div>
        <Footer v-if="!isHome" />
    </div>
</template>

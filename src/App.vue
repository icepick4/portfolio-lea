<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default defineComponent({
    name: 'App',
    components: {
        RouterView,
        Header,
        Footer
    },
    setup() {
        const route = useRoute();
        const isHome = ref(route.path === '/');

        watch(
            () => route.path,
            (newPath: string) => {
                isHome.value = newPath === '/';
            }
        );

        return { isHome };
    }
});
</script>

<template>
    <div class="flex flex-col h-screen">
        <Header />
        <div
            class="flex justify-center items-center flex-grow"
            :class="isHome ? 'pt-0' : 'pt-28'"
        >
            <RouterView />
        </div>
        <Footer />
    </div>
</template>

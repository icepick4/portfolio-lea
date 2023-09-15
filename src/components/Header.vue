<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const isHome = computed(() => route.path === '/');

const goBottom = () => {
    if (isHome.value) {
        router.push('/mentions-legales');
    } else {
        document.body.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
};
</script>

<template>
    <div class="fixed w-full z-40">
        <div
            class="flex-row justify-center sm:justify-between items-center gap-4 bg-white z-50 w-full flex"
        >
            <RouterLink to="/" class="m-4 text-[#707070] text-xl font-bold">
                <img src="/logo.png" alt="logo" class="w-20" />
            </RouterLink>
            <div class="mr-10 hidden sm:block">
                <RouterLink
                    to="/travaux"
                    class="m-4 text-[#707070] text-xl font-bold"
                >
                    <span class="hover:text-black transition-all duration-600"
                        >Réalisations
                    </span>
                </RouterLink>
                <RouterLink
                    to="/cv"
                    class="m-4 text-[#707070] text-xl font-bold"
                >
                    <span class="hover:text-black transition-all duration-600"
                        >Parcours
                    </span>
                </RouterLink>
                <button
                    class="m-4 text-[#707070] text-xl font-bold"
                    @click="goBottom"
                >
                    <span class="hover:text-black transition-all duration-600"
                        >Contacts
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

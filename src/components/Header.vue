<script setup lang="ts"></script>

<template>
    <div class="fixed w-full">
        <div class="flex flex-row gap-4 ml-12 bg-transparent z-50">
            <RouterLink to="/" class="m-4 text-lime-700 text-xl font-bold">
                <span class="hover:text-black transition-all duration-600"
                    >Accueil</span
                >
            </RouterLink>
            <RouterLink to="/cv" class="m-4 text-lime-700 text-xl font-bold">
                <span class="hover:text-black transition-all duration-600"
                    >À propos de moi</span
                >
            </RouterLink>
            <RouterLink
                to="/travaux"
                class="m-4 text-lime-700 text-xl font-bold"
            >
                <span class="hover:text-black transition-all duration-600"
                    >Mes réalisations</span
                >
            </RouterLink>
            <RouterLink
                to="/contact"
                class="m-4 text-lime-700 text-xl font-bold"
            >
                <span class="hover:text-black transition-all duration-600"
                    >Contact</span
                >
            </RouterLink>
        </div>
    </div>
</template>

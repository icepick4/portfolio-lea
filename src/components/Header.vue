<script setup lang="ts"></script>

<template>
    <div class="flex flex-row gap-4 ml-12 bg-transparent absolute z-50">
        <RouterLink to="/" class="m-4 text-white text-xl">
            <span class="hover:text-neutral-600 transition-all duration-600"
                >Accueil</span
            >
        </RouterLink>
        <RouterLink to="/about" class="m-4 text-white text-xl">
            <span class="hover:text-neutral-600 transition-all duration-600"
                >À propos de moi</span
            >
        </RouterLink>
        <RouterLink to="/travaux" class="m-4 text-white text-xl">
            <span class="hover:text-neutral-600 transition-all duration-600"
                >Mes réalisations</span
            >
        </RouterLink>
        <RouterLink to="/contact" class="m-4 text-white text-xl">
            <span class="hover:text-neutral-600 transition-all duration-600"
                >Contact</span
            >
        </RouterLink>
    </div>
</template>

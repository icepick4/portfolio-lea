<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
    name: 'VeggyHunt'
});

const colors = ['#707950', '#a7af76', '#fbeba9', '#604008'];
</script>

<template>
    <h1 class="text-center text-3xl font-bold">VeggyHunt ?</h1>
    <p class="text-center text-lg w-1/2">
        Veggy Hunt redéfinit la façon de se procurer des repas. Inspiré par les
        chasseurs-cueilleurs du passé, Veggy Hunt propose des kits de repas à
        récupérer soi-même, ajoutant une touche d’aventure à l’alimentation
        quotidienne. Encouragez la génération Z à redécouvrir le plaisir de se
        déplacer pour se nourrir, comme nos ancêtres.
    </p>
    <div class="flex flex-row justify-center items-center gap-10 w-5/6 h-10">
        <div
            v-for="color in colors"
            :key="color"
            :style="{ backgroundColor: color }"
            class="w-full h-10"
        ></div>
    </div>
</template>

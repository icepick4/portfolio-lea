<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
    name: 'VeggyHunt'
});

const colors = ['#707950', '#a7af76', '#fbeba9', '#604008'];
</script>

<template>
    <div
        class="flex flex-col lg:flex-row w-full justify-evenly items-center gap-10 lg:gap-0 mb-10"
    >
        <img
            v-for="i in 3"
            :key="i"
            :src="`/projects/veggy-hunt/poster-${i}.png`"
            class="w-3/4 md:w-1/3 h-3/4 object-contain"
        />
    </div>
    <h1 class="text-center text-3xl font-bold">VeggyHunt ?</h1>
    <div class="flex flex-col justify-center items-center w-full mb-14">
        <p class="text-center text-base lg:text-lg w-5/6 lg:w-2/3 ">
            Veggy Hunt redéfinit la façon de se procurer des repas. Inspiré par
            les chasseurs-cueilleurs du passé,
        </p>
        <p class="text-center text-base lg:text-lg w-5/6 lg:w-2/3 ">
            Veggy Hunt propose des kits de repas à récupérer soi-même, ajoutant
            une touche d’aventure <p class="text-center text-base lg:text-lg w-5/6 lg:w-2/3 ">
                à l’alimentation quotidienne. Encourager la
            génération Z à redécouvrir le plaisir de se déplacer 

            </p> 
        </p>
        <p class="text-center text-base lg:text-lg w-5/6 lg:w-2/3 ">
            pour se
            nourrir, comme nos ancêtres.
        </p>
    </div>
    <div
        class="flex flex-col lg:flex-row justify-evenly items-center gap-20 mb-10"
    >
        <img
            v-for="i in 5"
            :key="i"
            :src="`/projects/veggy-hunt/phone-${i}.png`"
            class="w-auto h-11/12 object-contain lg:block hidden"
        />
        <img
            src="/projects/veggy-hunt/phone-3.png"
            class="w-full h-auto lg:hidden"
        />
    </div>
    <div
        class="flex flex-row justify-center items-center gap-4 lg:gap-10 w-11/12 lg:w-5/6 h-10"
    >
        <div
            v-for="color in colors"
            :key="color"
            :style="{ backgroundColor: color }"
            class="w-full h-10"
        ></div>
    </div>
</template>

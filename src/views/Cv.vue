<script lang="ts">
import { defineComponent } from 'vue';
import SkillCard from '../components/SkillCard.vue';
import { skills } from '../utils';
export default defineComponent({
    name: 'Cv',
    components: { SkillCard },
    setup() {
        return {
            skills
        };
    },
    mounted() {
        document.body.scrollTo(0, 0);
    }
});
</script>

<template>
    <div class="flex flex-col items-center gap-14 h-full mb-20">
        <h1 class="text-5xl lg:text-7xl font-title text-center">
            Curriculum Vitae
        </h1>
        <a
            class="text-xl font-bold border-2 rounded-lg border-black cursor-pointer p-2 mt-4 hover:scale-110 transition-all duration-300 mb-16"
        >
            Télécharger le PDF
        </a>
        <div class="flex flex-col items-center gap-5 w-full xl:flex-row">
            <SkillCard
                v-for="skill in skills"
                :key="skill.title"
                :title="skill.title"
                :list="skill.list"
                :color="skill.color"
                :character="skill.character"
            />
        </div>
        <RouterLink
            to="/"
            class="text-xl font-bold border-2 rounded-2xl border-black p-2 px-4 mt-4 hover:scale-110 transition-all duration-300"
        >
            Retour à la l'accueil
        </RouterLink>
    </div>
</template>

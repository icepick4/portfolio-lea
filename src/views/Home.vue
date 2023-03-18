<script lang="ts">
import { defineComponent, ref } from 'vue';
import HomeComponent from '../components/HomeComponent.vue';
export default defineComponent({
    name: 'Home',
    setup() {
        const scrollPosition = ref(0);
        return { scrollPosition };
    },
    components: { HomeComponent },
    mounted() {
        document.body.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        document.body.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = document.body.scrollTop;
            const scrollHeight = document.body.scrollHeight;
            const clientHeight = document.body.clientHeight;
            const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
            this.scrollPosition = Math.round(scrolled);
        },
        activatedIndex(index: number) {
            index = index - 1;
            return (
                this.scrollPosition >= 33 * index &&
                this.scrollPosition - 2 < 33 * (index + 1)
            );
        }
    }
});
</script>

<template>
    <div class="flex flex-col items-end gap-6 fixed top-10 right-10 w-1/6">
        <div
            v-for="i in 3"
            :key="i"
            class="w-1/6 h-[5px] rounded-sm"
            :class="[activatedIndex(i) ? 'bg-black w-1/4' : 'bg-white']"
        ></div>
    </div>
    <div class="flex flex-col">
        <HomeComponent
            color="green"
            character="ondulés"
            title="Bonjour ! moi
        c'est Léa"
        />
        <HomeComponent
            color="red"
            character="chignons"
            title="Il était une
        fois, moi ..."
            description="Bonjour moi c'est Léa.
        Je viens de Thonon-les-Bains en Haute-Savoie. 
        Je suis dynamique, drôle, souriante et toujours de bonne humeur ! 
        J'aime toucher à tout et découvrir de nouvelles choses."
            link="/about"
            linkText="En savoir plus"
        />
        <HomeComponent
            color="blue"
            character="couronne"
            title="A la découverte de mon univers"
            link="/travaux"
            linkText="Voir mes réalisations"
        />
    </div>
</template>

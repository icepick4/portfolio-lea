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
            if (index === 2 && this.scrollPosition === 100) {
                return true;
            }
            return (
                this.scrollPosition >= 33 * index &&
                this.scrollPosition < 33 * (index + 1)
            );
        },
        scrollTo(index: number) {
            const element = document.getElementById(`section-${index}`);
            if (element) {
                document.body.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }
});
</script>

<template>
    <div class="flex flex-col items-end fixed top-10 right-10 w-1/12">
        <div
            v-for="i in 3"
            class="w-full flex items-end justify-end p-6"
            :key="i"
            @click="scrollTo(i)"
        >
            <div
                class="w-1/3 h-[5px] rounded-sm"
                :class="[activatedIndex(i) ? 'bg-black w-4/6' : 'bg-white']"
            ></div>
        </div>
    </div>
    <div class="flex flex-col">
        <HomeComponent
            color="green"
            character="ondule"
            title="Bonjour ! moi
        c'est Léa"
            id="section-1"
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
            link="/a-propos"
            linkText="En savoir plus"
            id="section-2"
        />
        <HomeComponent
            color="blue"
            character="couronne"
            title="A la découverte de mon univers"
            link="/travaux"
            linkText="Voir mes réalisations"
            id="section-3"
        />
    </div>
</template>

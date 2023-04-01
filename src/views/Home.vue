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
        document.body.scrollTo(0, 0);
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
            if (index === 2 && this.scrollPosition >= 33 * index) {
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
    <div
        class="flex flex-col items-end fixed top-0 right-1 md:top-10 md:right-10 w-1/12"
    >
        <div
            v-for="i in 3"
            class="w-full flex min-w-[150px] items-end justify-end p-5 group hover:cursor-pointer"
            :key="i"
            @click="scrollTo(i)"
        >
            <div
                class="w-1/3 h-[5px] rounded-sm group-hover:w-4/6 transition-all duration-500 ease-in-out"
                :class="[activatedIndex(i) ? 'bg-black w-4/6' : 'bg-white']"
            ></div>
        </div>
    </div>
    <div class="flex flex-col">
        <HomeComponent
            color="green"
            character="ondule"
            title="<span class='font-title'>Bonjour</span> !</br> moi
        c'est Léa"
            id="section-1"
        />
        <HomeComponent
            color="red"
            character="chignons"
            title="<span class='font-title'>Il était une
        fois, moi ... </span>"
            description="Bonjour moi c'est Léa.
        Je viens de Thonon-les-Bains en Haute-Savoie. 
        Je suis dynamique, drôle, souriante et toujours de bonne humeur ! 
        J'aime toucher à tout et découvrir de nouvelles choses."
            link="/cv"
            linkText="En savoir plus"
            id="section-2"
        />
        <HomeComponent
            color="blue"
            character="couronne"
            title="<span class='font-title'>A la découverte de mon univers</span>"
            link="/travaux"
            linkText="Voir mes réalisations"
            id="section-3"
        />
    </div>
</template>

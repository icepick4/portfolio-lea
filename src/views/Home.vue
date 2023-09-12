<script setup lang="ts">
import HomeComponent from '@/components/HomeComponent.vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
const items = [
    {
        color: 'blue',
        character: 'P1',
        title: "<span class='font-title'>Bonjour</span> !</br> <p class='text-2xl'>moi c'est Léa</p>",
        id: 'section-1'
    },
    {
        color: 'purple',
        character: 'P2',
        title: "<span class='font-title'>Envie d'une stagiaire surmotivée ?</span>",
        link: '/cv',
        linkText: 'Mon parcours',
        id: 'section-2'
    },
    {
        color: 'green',
        character: 'P3',
        title: "<span class='font-title'>À la découverte de mon univers</span>",
        link: '/travaux',
        linkText: 'Voir mes réalisations',
        id: 'section-3'
    }
];

const modules = [Pagination];
</script>

<template>
    <div class="w-full h-full overflow-hidden">
        <swiper
            :slides-per-view="1"
            :pagination="{ clickable: true }"
            :grabCursor="true"
            :modules="modules"
            class="w-full h-full flex items-center justify-center"
        >
            <swiper-slide v-for="item in items" :key="item.id">
                <img
                    src="/characters/face.png"
                    class="w-1/5 z-[1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <HomeComponent
                    :color="item.color"
                    :character="item.character"
                    :title="item.title"
                    :link="item.link"
                    :linkText="item.linkText"
                    :id="item.id"
                />
                <img
                    :src="'/characters/' + item.character + '.png'"
                    alt="hero"
                    class="w-2/5 sm:w-1/2 mx-auto lg:w-1/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
                />
            </swiper-slide>
        </swiper>
    </div>
</template>
<style scoped>
/* #face {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    z-index: 3;
    pointer-events: none;
} */

.test {
    left: 100%;
}
</style>

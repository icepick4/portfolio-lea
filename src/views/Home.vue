<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import HomeComponent from '../components/HomeComponent.vue';
const items = [
    {
        color: 'green',
        character: 'ondule',
        title: "<span class='font-title'>Bonjour</span> !</br> moi c'est Léa",
        id: 'section-1'
    },
    {
        color: 'red',
        character: 'chignons',
        title: "<span class='font-title'>Il était une fois, moi ... </span>",
        description:
            "Bonjour moi c'est Léa. Je viens de Thonon-les-Bains en Haute-Savoie. Je suis dynamique, drôle, souriante et toujours de bonne humeur ! J'aime toucher à tout et découvrir de nouvelles choses.",
        link: '/cv',
        linkText: 'En savoir plus',
        id: 'section-2'
    },
    {
        color: 'blue',
        character: 'couronne',
        title: "<span class='font-title'>A la découverte de mon univers</span>",
        link: '/travaux',
        linkText: 'Voir mes réalisations',
        id: 'section-3'
    }
];

const modules = [Pagination];
</script>

<template>
    <div class="flex flex-row w-full h-full overflow-hidden">
        <div class="w-1/2 h-full bg-[#94dcaa] absolute"></div>
        <swiper
            :slides-per-view="1"
            :pagination="{
                clickable: true
            }"
            :grabCursor="true"
            :modules="modules"
            class="w-full h-full"
        >
            <swiper-slide v-for="(item, index) in items" :key="index">
                <HomeComponent
                    :color="item.color"
                    :character="item.character"
                    :title="item.title"
                    :description="item.description"
                    :link="item.link"
                    :linkText="item.linkText"
                    :id="item.id"
                />
            </swiper-slide>
        </swiper>
        <div class="w-1/2 h-full bg-[#7fcdc5] absolute right-0"></div>
    </div>
</template>

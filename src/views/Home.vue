<script setup lang="ts">
import HomeComponent from '@/components/HomeComponent.vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

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

const swiperRef = ref();

const slideNext = () => {
    swiperRef.value.$el.swiper.slideNext();
};

const slidePrev = () => {
    swiperRef.value.$el.swiper.slidePrev();
};

const modules = [Pagination];
const _ = ['bg-blue', 'bg-green', 'bg-purple'];
</script>

<template>
    <div class="w-full h-full">
        <div class="absolute w-full h-full z-[2]">
            <swiper
                :slides-per-view="1"
                :pagination="{ clickable: true }"
                :grabCursor="true"
                :modules="modules"
                @slide-next-transition-start="slideNext()"
                @slide-prev-transition-start="slidePrev()"
            >
                <swiper-slide v-for="item in items" :key="item.id">
                    <div class="w-full h-full">
                        <HomeComponent
                            :character="item.character"
                            :title="item.title"
                            :link="item.link"
                            :linkText="item.linkText"
                            :id="item.id"
                        />
                        <img
                            :src="'/characters/' + item.character + '.png'"
                            alt="haircut"
                            class="w-2/3 sm:w-1/2 lg:w-1/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
                        />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <swiper :slides-per-view="1" class="w-full h-full" ref="swiperRef">
            <img
                src="/characters/face.png"
                alt="bald face"
                class="w-2/3 sm:w-1/2 lg:w-1/5 z-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <swiper-slide v-for="item in items" :key="item.id">
                <div class="w-full h-full" :class="`bg-${item.color}`"></div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style>
.swiper-pagination {
    margin-bottom: 15px;
}
</style>

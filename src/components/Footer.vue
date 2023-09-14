<script setup lang="ts"></script>

<template>
    <div
        class="w-full h-auto bottom-0 bg-white flex flex-col items-center justify-center rounded-t-[100px] border-2 border-black p-6 mt-16"
    >
        <h1 class="text-center text-5xl font-title my-8">Contacts</h1>
        <div
            class="w-full flex flex-col sm:flex-row justify-center items-start sm:gap-0 gap-5"
        >
            <p class="font-bold w-full sm:w-1/3 text-center sm:text-right">
                LEVI Léa 2023 - Tous droits réservés
            </p>
            <div class="flex flex-col items-center w-full sm:w-1/3">
                <p class="font-bold">Leamarina.levi@gmail.com</p>
                <p class="font-bold">06 48 90 68 34</p>
                <a
                    class="underline"
                    href="https://instagram.com/le.a.rt?utm_source=qr&igshid=MThlNWY1MzQwNA=="
                    >Instagram</a
                >
                <a
                    class="underline"
                    href="https://www.linkedin.com/in/l%C3%A9a-levi-296532202"
                    >LinkedIn</a
                >
            </div>
            <div
                class="flex flex-col w-full sm:w-1/3 items-center sm:items-start"
            >
                <RouterLink to="/mentions-legales" class="underline"
                    >Mentions Légales</RouterLink
                >
                <div class="flex gap-4 justify-center items-center">
                    <p>
                        Réalisé par
                        <a href="https://remi-jara.fr" class="underline"
                            >Rémi JARA</a
                        >
                    </p>
                    <a
                        href="https://github.com/icepick4"
                        class="hover:scale-110 transition-all duration-300"
                    >
                        <img src="/github.png" alt="github" class="w-8" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

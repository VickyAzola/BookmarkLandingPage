<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue';

    const selected = ref(0)

    function changeCard(index) {
        selected.value = index
    }

    const buttons = [
        {id:0, text: 'Simple Bookmarking'},
        {id:1, text: 'Speedy Searching'},
        {id:2, text: 'Easy Sharing'},
    ]

    const cards = [
        {
            id: 0,
            img: '/images/illustration-features-tab-1.svg',
            title: 'Bookmark in one click',
            description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
        },
        {
            id: 1,
            img: '/images/illustration-features-tab-2.svg',
            title: 'Intelligent search',
            description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
        },
        {
            id: 2,
            img: '/images/illustration-features-tab-3.svg',
            title: 'Share your bookmarks',
            description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
        }
    ]

</script>

<template>
    
    <div class="px-8 md:px-24 lg:max-w-[55rem] mb-10 w-full md:flex">
        <div v-for="(button, index) in buttons"
            :key="button.id" 
            class="border-y md:border-t-white flex w-full items-center justify-center"
        >
            <button 
            @click="changeCard(index)"  
            :class="[ selected == index ? 'border-b-4 border-b-PrimarySoftRed text-VeryDarkBlue' : 'text-gray-500' ]"
            class="py-2 px-5 hover:text-PrimarySoftRed transition-all" 
        >
                {{ button.text }}
            </button>
        </div>
    </div>

    <div class="lg:grid lg:grid-cols-2 lg:items-center">   
        <div class="relative pt-12 mt-6 lg:pt-16 transition-all">
            <div class="bg-PrimarySoftBlue h-52 w-[80%] md:h-[17rem] md:w-[70%] lg:h-[22rem] lg:w-[90%] rounded-l rounded-full"></div>
            <img 
                :src=cards[selected].img 
                alt="" 
                class="max-w-[90%] max-h-[100%] md:h-auto md:w-auto px-6 lg:px-0 z-10 top-0 absolute mx-auto left-0 right-0 lg:mx-0 lg:left-auto lg:right-0" 
            />
        </div>
        <div class="px-8 pb-8 pt-10 lg:py-0 md:px-24 lg:pr-28 flex flex-col items-center text-center lg:text-left lg:items-start">
            <h3 class="font-semibold text-2xl mb-3 lg:mb-5">{{ cards[selected].title }}</h3>
            <p class=" text-GrayishBlue">{{ cards[selected].description }}</p>
            <div class="mt-7 hidden lg:block">
                <BaseButton variant="blue" textButton="More Info" />
            </div>
        </div>
    </div>
</template>
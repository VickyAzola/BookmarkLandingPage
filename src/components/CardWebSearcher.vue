<script setup>

const cards = [
    {
        id: 0, 
        img:'/images/logo-chrome.svg', 
        alt: 'Chrome',
        title: "Add to Chrome", 
        minVer: 62, 
        link: "#",
        margin: 'mt-0 mb-14'
    },
    {
        id: 1, 
        img:'/images/logo-firefox.svg',  
        alt: 'Firefox',
        title: "Add to Firefox", 
        minVer: 55, 
        link: "#",
        margin: 'mt-7 mb-7'
    },
    {
        id: 2, 
        img:'/images/logo-opera.svg',  
        alt: 'Opera',
        title: "Add to Opera", 
        minVer: 46, 
        link: "#",
        margin: 'mt-14 mb-0'
    }
]

</script>

<template>
    <div 
        v-for="card in cards" 
        class="my-6 shadow-[.3rem_.3rem_1.5rem_.1rem_hsla(229,8%,60%,20%)] rounded-lg"
        :class="card.margin"
    >
        <div class="px-6 py-8 flex flex-col items-center text-center">
            <img :src=card.img :alt=card.alt class="mb-6 mt-2" />
            <p class="font-semibold text-lg mb-1">{{ card.title }}</p>
            <p class="text-sm text-GrayishBlue"> Minimum version {{ card.minVer }}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="280" height="4">
            <path fill="#495DCF" fill-opacity=".2" fill-rule="evenodd" d="M0 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm280 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-18 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm122 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-70 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM88 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM70 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM53 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM35 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM18 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
        </svg>
        <div class="py-8 px-6 w-full">
            <a 
                :href="card.link" 
                class="bg-PrimarySoftBlue transition-all text-white border border-PrimarySoftBlue p-3 w-full inline-block rounded-md hover:bg-white hover:text-PrimarySoftBlue"
            >
                Add & Install Extension</a>
        </div>
    </div>
</template>

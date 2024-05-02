<script setup>
import { ref } from '@vue/reactivity'
import Hamburger from '/public/images/icon-hamburger.svg'
import Close from '/public/images/icon-close.svg'
import Logo from '/public/images/logo-bookmark.svg'
import LogoWhite from '/public/images/logo-bookmark-white.svg'


const NavLinks = [
    {id: 0, name: "Features", link: "#"},
    {id: 1, name: "Pricing", link: "#"},
    {id: 2, name: "Contact", link: "#"}
]

let open = ref(false)

function menuOpen() {
    open.value = !open.value
}

</script>

<template>
    <div class="bg-white h-20 lg:h-32 fixed top-0 z-20 w-full lg:flex lg:justify-between lg:items-center lg:px-28">

        <div class="py-7 px-8 lg:p-0">
            <a href="#" class="absolute z-20 top-0 left-0 pt-7 lg:pt-9 lg:pl-24" :class="[open ? 'pl-12' : '']">
              <img 
                :src="[open ? LogoWhite : Logo]" 
                alt="Logo" 
                :class="[open ? 'transition-all duration-1000 -translate-x-6' : 'transition-all duration-700 translate-x-6']" 
              />
            </a>
            <button @click="menuOpen()" class="absolute z-20 top-0 right-0 pt-8 pr-6 lg:hidden">
                <img :src="[open ? Close : Hamburger]" alt="Open and Close the Navigation menu" />
            </button>
        </div>

        <nav aria-label="Top Navigation" id="topNav">
          <div 
            class="absolute flex flex-col justify-between top-0 z-10 lg:static bg-VeryDarkBlue/95 lg:bg-white 
            min-h-screen w-full lg:min-h-min ease-in-out duration-700 lg:transition-none pt-28 px-8 pb-10 lg:p-0"
            :class="[open ? 'left-0' : 'left-[100%]']">
            
            <ul class="lg:flex lg:justify-between lg:items-center lg:gap-x-8 uppercase lg:text-GrayishBlue text-white text-center tracking-widest text-lg lg:text-sm">
              <li class="mb-6 pt-6 lg:mb-0 lg:p-0 border-t lg:border-none"
                v-for="link in NavLinks" 
              >
                <a :href="link.link" class="tracking-[.2rem] hover:text-PrimarySoftRed"> {{ link.name }} </a>
              </li>
              <li class="my-6 lg:my-0 lg:p-0 border-t lg:border-none">
                <button class="tracking-[.2rem] py-3 mt-6 lg:m-0 lg:py-2 lg:px-6 border rounded border-white hover:border-PrimarySoftRed w-full lg:bg-PrimarySoftRed lg:text-white lg:border-PrimarySoftRed lg:hover:bg-white hover:text-PrimarySoftRed">
                  LOGIN
                </button>
              </li>
            </ul>

            <div class="flex lg:hidden items-center justify-center gap-x-8">
              <a href="" aria-label="Go to our Facebook">
                <svg 
                  class="fill-white hover:fill-PrimarySoftRed"
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path fill-rule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
              <a href="" aria-label="Go to our Twitter">
                <svg 
                  class="fill-white hover:fill-PrimarySoftRed"
                  xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                  <path fill-rule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"/>
                </svg>
              </a>
            </div>

          </div>
        </nav>

    </div>
</template>

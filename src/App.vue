<script setup>
import { ref } from '@vue/reactivity'
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue'
import CardWebSearcher from './components/CardWebSearcher.vue';
import FeaturesCard from './components/FeaturesCard.vue';
import AskedQuestions from './components/AskedQuestions.vue';
import BaseButton from './components/BaseButton.vue';
import HeroImg from '/images/illustration-hero.svg';

let email = ref('')
let errorMsg = ref(false)

function submitForm() {
  let validEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/g
  if (email.value == '' || !email.value.match(validEmail)) {
    errorMsg.value = true
  } else {
    alert('Thanks, we will be in contact!')
    errorMsg.value = false
    email.value = ''
  }
}

</script>

<template>
  <header>
    <TheNavbar />
  </header>
  <main class="xl:max-w-[91rem] xl:mx-auto">
    <section class="mt-32 lg:mt-40 mb-36 lg:grid lg:grid-cols-2 lg:items-center">
      <div class="relative pt-14 mt-6 md:pt-28 lg:order-last">
        <div class="bg-PrimarySoftBlue h-56 w-[80%] md:h-[21rem] ml-auto rounded-r rounded-full"></div>
        <img :src=HeroImg alt="" class="z-10 max-h-[110%] lg:max-h-auto top-0 absolute mx-auto inset-x-0 lg:mr-8" />
      </div>
      <div>
        <div class="text-center lg:text-left mx-8 mt-10 mb-8 md:mx-24 lg:mr-16 lg:ml-28 xl:ml-32 md:mt-14 lg:mt-4">
          <h1 class="text-3xl lg:text-4xl text-VeryDarkBlue font-semibold mb-3 lg:mb-6">A Simple Bookmark Manager</h1>
          <p class="text-GrayishBlue">
            A clean and simple interface to organize your favourite websites. Open a new 
            browser tab and see your sites load instantly. Try it for free.
          </p>
        </div>
        <div class="flex gap-x-4 items-center justify-center lg:justify-start lg:pl-28 xl:pl-32">
          <BaseButton variant="blue" textButton="Get it on Chrome" />
          <BaseButton variant="white" textButton="Get it on Firefox" />
        </div>
      </div>
    </section>

    <section class="md:mt-14 mt-12 mb-24 flex flex-col items-center text-center">
      <div class="mx-8 mb-10 md:mx-24 lg:mx-28 xl:mx-32 lg:max-w-[30rem]">
        <h2 class="text-2xl lg:text-3xl text-VeryDarkBlue font-semibold mb-3">Features</h2>
        <p class="text-GrayishBlue mb-2">
          Our aim is to make it quick and easy for you to access your favourite websites. 
          Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>
      <FeaturesCard />
    </section>

    <section class="my-16 flex flex-col items-center text-center mx-8 md:mx-24 lg:mx-28 xl:mx-32">
      <div class="mb-10 lg:max-w-[30rem]">
        <h4 class="text-2xl lg:text-3xl font-semibold mb-3">Download the extension</h4>
        <p class="text-GrayishBlue">
          We’ve got more browsers in the pipeline. Please do let us know if you’ve 
          got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div class="lg:flex lg:justify-center lg:gap-x-8 lg:mt-10 lg:mb-12">
        <CardWebSearcher />
      </div>
    </section>

    <section class="mt-24 mb-32 flex flex-col items-center text-center mx-8 md:mx-24 lg:max-w-[35rem] lg:mx-auto">
      <h5 class="text-2xl lg:text-3xl font-semibold mb-3">Frequently Asked Questions</h5>
      <p class="text-GrayishBlue">
        Here are some of our FAQs. If you have any other questions you’d like 
        answered please feel free to email us.
      </p>
      <AskedQuestions />
      <BaseButton variant="blue" textButton="More Info" />
    </section>
  
  </main>

  <footer>
    <section class="bg-PrimarySoftBlue text-white px-8 md:px-24 py-12 text-center ">
      <div class="lg:max-w-[30rem] lg:mx-auto ">
        <p class="uppercase tracking-[.25rem] text-sm">35,000+ already joined</p>
        <h6 class="font-semibold text-2xl lg:text-3xl mt-3 mb-6">Stay up-to-date with what we’re doing</h6>
        <form @submit.prevent="onSubmit" class="flex flex-col w-full lg:flex-row lg:gap-x-2 lg:items-start">
          <div class="relative mb-3 w-full" >
            <label for="email" class="rounded-md lg:w-2/3" :class="[errorMsg ? 'border bg-PrimarySoftRed border-PrimarySoftRed': 'border-none']">
              <input 
                id="email" 
                type="email"
                v-model="email"
                placeholder="Enter your email adress"
                class="w-full py-3 rounded-md px-4 text-sm placeholder-gray-400 text-gray-700" 
                required
              />
              </label>
              <svg
                :class="[errorMsg ? 'block' : 'hidden']" 
                class="absolute right-3 top-3"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <g fill="none" fill-rule="evenodd">
                  <circle cx="10" cy="10" r="10" fill="#FA5959"/>
                  <g fill="#FFF" transform="translate(9 5)">
                    <rect width="2" height="7" rx="1"/>
                    <rect width="2" height="2" y="8" rx="1"/>
                  </g>
                </g>
              </svg>
            <p
              :class="[errorMsg ? 'block' : 'hidden']" 
              class="bg-PrimarySoftRed text-xs rounded-b-md italic text-left pl-2 py-1">
              Whoops, make sure it's an email
            </p>
          </div>
          <BaseButton :handleClick="submitForm" variant="red" textButton="Contact Us" />
        </form>
      </div>
    </section>
    
    <TheFooter />
  </footer>
</template>


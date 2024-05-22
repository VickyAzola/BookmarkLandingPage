<script setup>
import { ref } from '@vue/reactivity'

const selected = ref()

function dropdown(index) {
    selected.value = index
}

const dropdownData = [
    {
        id: 0,
        question: 'What is Bookmark?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
    },
    {
        id: 1,
        question: 'How can I request a new browser?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    },
    {
        id: 2,
        question: 'Is there a mobile app?',
        answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
    },
    {
        id: 3,
        question: 'What about other Chromium browsers?',
        answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    },
]

</script>


<template>

    <div class="my-10 w-full">
        <div v-for="(data, index) in dropdownData">
            <button 
                @click="dropdown(index)" 
                class="w-full flex justify-between items-center text-left gap-x-3 py-4 hover:text-PrimarySoftRed transition-all"
                :class="[selected == index ? 'border-none' : 'border-b']"
                >
                {{ data.question }}
                <svg 
                    :class="[selected == index? 'stroke-PrimarySoftRed rotate-180 transition-all duration-700' : 'stroke-[#5267DF] transition-all duration-500' ]"
                    xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke-width="3" d="M1 1l8 8 8-8"/>
                </svg>
            </button>
            <div class="border-b " :class="[selected == index ? 'block' : 'hidden']">
                <p class="py-4 text-GrayishBlue text-left">
                    {{ data.answer }}
                </p>
            </div>
        </div>
    </div>

</template>
<script setup>

defineProps({
    textButton: String,
    variant: String,
    handleClick: Function,
})

const styles = {
    blue: 'bg-PrimarySoftBlue text-white border border-PrimarySoftBlue hover:bg-white hover:text-PrimarySoftBlue',
    white: 'bg-white text-gray-500 shadow-md border border-white hover:border-gray-500',
    red: 'text-white bg-PrimarySoftRed lg:w-1/3 border border-PrimarySoftRed hover:bg-white hover:text-PrimarySoftRed'
}

</script>

<template>
    <button
        @click="handleClick" 
        class="py-3 px-4 rounded-md font-semibold text-sm transition-all" 
        :class="styles[variant]" >
        {{ textButton }}
    </button>
</template>

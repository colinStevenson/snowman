<template>
    <div class="snowman">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle v-if="maxGuesses - guessCount > 0" style="stroke-width: 4px; stroke: rgb(0, 0, 0); fill: none;" cx="244.633" cy="365.106" r="132.894"/>
            <circle v-if="maxGuesses - guessCount > 1" style="stroke-width: 4px; stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255);" cx="240.883" cy="234.179" r="111.146"/>
            <circle v-if="maxGuesses - guessCount > 2" style="stroke-width: 4px; stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255);" cx="243.875" cy="104.837" r="87.408"/>
            <circle v-if="maxGuesses - guessCount > 3" style="" cx="238.386" cy="250.728" r="10.094"/>
            <circle v-if="maxGuesses - guessCount > 4" style="" cx="238.386" cy="287.867" r="10.094"/>
            <circle v-if="maxGuesses - guessCount > 5" style="" cx="218.198" cy="96.55" r="10.094"/>
            <circle v-if="maxGuesses - guessCount > 6" style="" cx="258.574" cy="96.55" r="10.094"/>
            <circle v-if="maxGuesses - guessCount > 7" style="" cx="238.386" cy="212.897" r="10.094"/>
            <ellipse v-if="maxGuesses - guessCount > 8" style="fill: rgb(249, 133, 10);" cx="241.699" cy="138.792" rx="6.781" ry="15.759"/>
            <path v-if="maxGuesses - guessCount > 9" d="M 440.192 133.571 L 458.586 154.551 M 440.192 133.571 L 466.431 123.033 M 440.192 133.571 L 440.192 106.644 M 331.283 214.801 L 440.192 133.571" style="stroke: rgb(0, 0, 0); stroke-width: 4px; stroke-linecap: round;"/>
            <path v-if="maxGuesses - guessCount > 9" d="M 110.909 220.187 L 129.303 199.207 M 110.909 220.187 L 137.148 230.725 M 110.909 220.187 L 110.909 247.114 M 2 138.957 L 110.909 220.187" style="stroke: rgb(0, 0, 0); stroke-width: 4px; stroke-linecap: round;" transform="matrix(-1, 0, 0, -1, 139.147995, 386.070999)"/>
        </svg>
    </div>
</template>
<script>
export default {
    data (){
        return {
            maxGuesses: 10
        }
    },
    props: {
        guessCount: {
            type: Number,
            default: 0
        }
    }
}
</script>
<style scoped>
svg{
    width: 100%;
    height: 100%;
    max-height: 40vh;
}
</style>
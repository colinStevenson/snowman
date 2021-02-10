<template>
    <div class="mt-3 flex justify-content-end">
        <Letter
            v-for="(letter, i) in letters"
            v-bind:key="i"
            :letter="letter"
            :isRevealed="guesses.includes(letter)" />
    </div>
</template>
<script>
import Letter from '@/components/Letter'
export default {
    components: {
        Letter
    },
    computed: {
        letters () {
            return [...this.word]
        }
    },
    props: {
        guesses: {
            type: Array,
            default: () => []
        },
        word: {
            type: String,
            required: true
        }
    }
}
</script>
<template>
    <div class="mt-5">
        <Selection
            v-for="(letter, i) in letters"
            v-bind:key="i"
            :letter="letter"
            :isSelected="guesses.includes(letter)"
            @select="handleSelection"
            />
    </div>
</template>
<script>
import Selection from '@/components/Selection'
export default {
    components: {
        Selection
    },
    computed: {
        letters () {
            const val = []
            for (let i = 97; i < 123; i++) {
                val.push(String.fromCharCode(i))
            }
            return val
        }
    },
    methods: {
        handleSelection (letter) {
            this.$emit('select', letter)
        }
    },
    props: {
        guesses: {
            type: Array,
            default: () => []
        }
    }
}
</script>
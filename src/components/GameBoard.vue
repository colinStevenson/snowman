<template>
    <div class="container-fluid">
        <h1 v-if="hasWon" class="my-3">Winner</h1>
        <h1 v-if="hasLost" class="my-3">Loser</h1>
        <div class="row">
            <div class="col">
                <div v-for="(word, i) in words" v-bind:key="i">
                    <Word
                        :word="word"
                        :guesses="guesses"
                        />
                </div>
            </div>
            <div class="col">
                <Snowman :guessCount="badGuesses.length" />
            </div>
        </div>
        <Selections
            :guesses="guesses"
            :phrase="phrase"
            @select="handleSelection"
            />
    </div>
</template>
<script>
const MAX_BAD_GUESSES = 10
import Selections from '@/components/Selections'
import Snowman from '@/components/Snowman'
import Word from '@/components/Word'
export default {
    components: {
        Selections,
        Snowman,
        Word
    },
    computed: {
        characters () {
            return [...this.phrase.replace(/\s/g, '').toLowerCase()].filter(c => /^[a-zA-Z]+$/.test(c))
        },
        badGuesses () {
            return this.guesses.filter(guess => {
                return !this.characters.includes(guess)
            })
        },
        words () {
            return this.phrase.toLowerCase().split(' ')
        },
        lettersUnique () {
            const val = {}
            this.characters.map(char => {
                val[char] = this.guesses.includes(char)
            })
            return val
        },
        hasWon () {
            let val = true
            for (const char in this.lettersUnique) {
                if (!this.lettersUnique[char]) {
                    val = false
                    break
                }
            }
            return val
        },
        hasLost () {
            return this.badGuesses.length >= MAX_BAD_GUESSES
        }
    },
    props: {
        guesses: {
            type: Array,
            default: () => []
        },
        phrase: {
            type: String,
            default: 'Hello World'
        }
    },
    methods: {
        handleSelection (letter) {
            this.$emit('letterSelect', letter)
        }
    }
}
</script>
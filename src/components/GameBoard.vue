<template>
    <div class="container-fluid">
        <div
            v-if="hasLost || hasWon"
            :class="{ 'alert-danger': hasLost, 'alert-success': hasWon }"
            class="alert"
            role="alert"
        >
            <strong>{{ hasLost ? 'Nice Try!' : 'Congatulations!' }}</strong> The phrase was <a :href="`https://www.merriam-webster.com/dictionary/${this.phrase}`" target="_blank">{{ this.phrase }}</a>.
        </div>
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
                <Snowman :color="color" :difficulty="difficulty" :guessCount="badGuesses.length" />
            </div>
        </div>
        <Selections
            :color="color"
            :guesses="guesses"
            :phrase="phrase"
            @select="handleSelection"
        />
    </div>
</template>
<script>
import rules from '@/config/game-rules'
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
            return this.badGuesses.length >= rules[this.difficulty].maxGuesses
        }
    },
    props: {
        color: {
            type: String,
            required: true
        },
        difficulty: {
            type: String,
            required: true
        },
        guesses: {
            type: Array,
            default: () => []
        },
        phrase: {
            type: String,
            required: true
        }
    },
    methods: {
        handleSelection (letter) {
            // disallow additional guesses after win/loss
            if(!this.hasWon && !this.hasLost) {
                this.$emit('letterSelect', letter)
            }
        }
    }
}
</script>
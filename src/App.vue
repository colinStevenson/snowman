<template>
  <div id="app">
    <Navbar
      @reset="handleGameReset"
      @phraseUpdate="handlePhraseUpdate"
    />
    <GameBoard
      :phrase="activePhrase"
      :guesses="guesses"
      @letterSelect="handleLetterSelect"
    />
  </div>
</template>

<script>
import GameBoard from '@/components/GameBoard'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    GameBoard,
    Navbar
  },
  data () {
    return {
      activePhrase: 'Snowman',
      guesses: []
    }
  },
  methods: {
    handleGameReset () {
      this.guesses = []
    },
    handleLetterSelect (letter) {
      this.guesses.push(letter)
    },
    handlePhraseUpdate (phrase) {
      this.activePhrase = phrase
      this.handleGameReset()
    }
  }
}
</script>
<style src="../node_modules/bootstrap/dist/css/bootstrap.min.css"  />
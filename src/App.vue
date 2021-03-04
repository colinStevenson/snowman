<template>
  <div id="app">
    <Navbar
      @reset="handleGameReset"
      @colorUpdate="handleColorUpdate"
      @difficultyUpdate="handleDifficultyUpdate"
      @phraseUpdate="handlePhraseUpdate"
    />
    <GameBoard
      :color="color"
      :difficulty="difficulty"
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
      color: '#000',
      difficulty: 'easy',
      guesses: []
    }
  },
  methods: {
    handleColorUpdate (color) {
      this.color = color
    },
    handleDifficultyUpdate (difficulty) {
      this.difficulty = difficulty
      this.handleGameReset()
    },
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
<style>
input[type="color"]{
  height: 2em;
  width: 2em;
  vertical-align: middle;
}
</style>
<template>
    <span class="tile display-4">
        <span v-if="!isLetter(letter)">{{letter}}</span>
        <span v-else-if="isRevealed">{{letter}}</span>
        <span v-else>&nbsp;</span>
    </span>
</template>
<script>
export default {
    props: {
        letter: {
            type: String,
            required: true
        },
        isRevealed: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        isLetter (letter) {
            return /^[a-zA-Z]+$/.test(letter)
        }
    }
}
</script>
<style scoped>
.tile{
    border-bottom: 1px solid #000;
    display: inline-block;
    margin-right: 1rem;
    text-align: center;
    text-transform: uppercase;
    width: 3rem;
}
.tile span{
    display: inline-block;
}
</style>
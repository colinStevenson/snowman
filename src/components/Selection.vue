<template>
    <button
        class="btn btn-link text-uppercase btn-selection"
        :class="isBadGuess && isSelected ? 'bad' : ''"
        @click="select(letter)"
        @select="select(letter)"
        :disabled="isSelected"
        :style="`color: ${color}`"
    >
        {{letter}}
    </button>
</template>
<script>
export default {
    methods: {
        select (letter) {
            this.$emit('select', letter)
        }
    },
    props: {
        color: {
            type: String,
            required: true
        },
        letter: {
            type: String,
            required: true
        },
        isSelected: {
            type: Boolean,
            default: false
        },
        isBadGuess: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss">
.btn-selection{
    font-size: 3rem !important;

    &.bad{
        position: relative;
        &:before{
            top: 50%;
            left: 0;
            content:  '';
            height: 4px;
            width: 100%;
            background: red;
            position: absolute;
            transform: rotate(45deg) translateY(-50%);

        }
    }
}
</style>
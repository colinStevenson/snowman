<template>
    <button
        class="btn btn-link text-uppercase btn-selection"
        @click="select(letter)"
        @select="select(letter)"
        :disabled="isSelected">
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
        letter: {
            type: String,
            required: true
        },
        isSelected: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style>
.btn-selection{
    font-size: 3rem !important;
}
</style>
<template>
    <nav class="navbar navbar-light bg-light">
        <div class="form-inline">
            <button
                class="btn btn-success"
                @click="isEditingPhrase = true"
                v-if="!isEditingPhrase"
            >
                Update Phrase
            </button>
            <template v-if="isEditingPhrase">
                <input
                    class="form-control mx-sm-2"
                    type="password"
                    aria-label="Search"
                    autocomplete="off"
                    v-model="phrase"
                />
                <button
                    class="btn btn-primary mr-sm-2"
                    @click="handleSave"
                >
                    Save
                </button>
                <button
                    class="btn btn-danger"
                    @click="handleCancel"
                >
                    Cancel
                </button>
            </template>
        </div>
        <button
            class="btn btn-warning"
            @click="$emit('reset')"
        >
            Reset
        </button>
    </nav>
</template>
<script>
export default {
    data () {
        return {
            isEditingPhrase: false,
            phrase: null
        }
    },
    methods: {
        handleCancel () {
            this.phrase = ''
            this.isEditingPhrase = false
        },
        handleSave () {
            this.$emit('phraseUpdate', this.phrase)
            this.phrase = ''
            this.isEditingPhrase = false
        }
    }
}
</script>
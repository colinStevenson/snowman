import Selection from '@/components/Selection'

export default {
    title: 'Fart',
    component: Selection
}

Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Selection },
    template:
      '<Selection :letter="letter" :isSelected="isSelected" :isBadGuess="isBadGuess" />',
}); 

export const Default = Template.bind({})
Default.args = {
    letter: a,
    isSelected: false,
    isBadGuess: false
}
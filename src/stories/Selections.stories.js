import Selections from '@/components/Selections'

export default {
    title: 'Selections',
    component: Selections
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Selections },
    template:
      '<Selections :guesses="guesses" :phrase="phrase" :color="color" />',
});

export const Default = Template.bind({});
Default.args = {
    guesses: ['a', 'b', 'c'],
    phrase: 'Snowman',
    color: '#000000'
}
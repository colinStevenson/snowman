import Word from '../components/Word'

export default {
    title: 'Word',
    component: Word
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Word },
    template:
      '<Word :guesses="guesses" :word="word" :color="color" />',
});

export const Def = Template.bind({});
Def.args = {
  guesses: [],
  word: 'Test',
  color: '#000000'
};
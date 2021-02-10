import Snowman from '../components/Snowman'

export default {
    title: 'Snowman',
    component: Snowman
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Snowman },
    template:
      '<Snowman :guessCount="guessCount" />',
});

export const NoGuesses = Template.bind({});
NoGuesses.args = {
  guessCount: 0,
};
export const OneGuess = Template.bind({});
OneGuess.args = {
  guessCount: 1,
};
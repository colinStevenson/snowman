import GameBoard from '../components/GameBoard'

export default {
    title: 'GameBoard',
    component: GameBoard
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { GameBoard },
    template:
      '<GameBoard :clue="clue" />',
});

export const Def = Template.bind({});
Def.args = {
    clue: 'Hello World'
};
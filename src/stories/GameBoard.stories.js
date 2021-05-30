import GameBoard from '../components/GameBoard'

export default {
    title: 'GameBoard',
    component: GameBoard
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { GameBoard },
    template:
      '<GameBoard :phrase="phrase" :difficulty="difficulty" :color="color" />',
});

export const Def = Template.bind({});
Def.args = {
    phrase: 'Hello World',
    difficulty: 'easy',
    color: '#000000'
};
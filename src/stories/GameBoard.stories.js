import GameBoard from '../components/GameBoard'

export default {
    title: 'GameBoard',
    component: GameBoard
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { GameBoard },
    template:
      '<GameBoard :phrase="phrase" />',
});

export const Def = Template.bind({});
Def.args = {
    phrase: 'Hello World'
};
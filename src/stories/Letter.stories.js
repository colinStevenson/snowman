import Letter from '@/components/Letter'

export default {
    title: 'Letter',
    component: Letter
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Letter },
    template:
      '<Letter :isRevealed="isRevealed" :letter="letter" :color="color" />',
});

export const Revealed = Template.bind({});
Revealed.args = {
  isRevealed: true,
  letter: 'a',
  color: '#000000'
};
export const NotRevealed = Template.bind({});
NotRevealed.args = {
  isRevealed: false,
  letter: 'a',
  color: '#000000'
};
import Letter from '@/components/Letter'

export default {
    title: 'Letter',
    component: Letter
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Letter },
    template:
      '<Letter :isRevealed="isRevealed" :letter="letter" />',
});

export const Revealed = Template.bind({});
Revealed.args = {
  isRevealed: true,
  letter: 'a'
};
export const NotRevealed = Template.bind({});
NotRevealed.args = {
  isRevealed: false,
  letter: 'a'
};
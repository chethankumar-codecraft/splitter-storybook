import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { TipInput } from './tip-input';
import { TipForm } from '../tip-form/tip-form';
import { moduleMetadata } from '@storybook/angular';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TipInput> = {
  title: 'Components/TipInput',
  component: TipInput,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color',
  //   },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    label: 'Test Tip Amount',
    value: 0,
    error: '',
     valueChange: (value) => console.log(value),
  },
};

export default meta;
type Story = StoryObj<TipInput>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  // args: {
  //   primary: true,
  //   label: 'Button',
  // },
};

// Lets use Tip Form here and create a story for it as well. We will use the same args as the Tip Input story, but we will also add a submit button to the form and log the form value when the button is clicked. We will also add a test to ensure that the form is submitting the correct value when the button is clicked.
export const WithForm: Story = {
  // we need to import TipForm here to use it in the template
  decorators: [
    moduleMetadata({
      imports: [TipForm],
    }),
  ],
  render: () => ({
    template: `
      <app-tip-form></app-tip-form>
    `,
  }),
};

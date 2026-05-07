import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { TipInput } from './tip-input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TipInput> = {
  title: 'Components/TipInput',
  component: TipInput,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { click: fn() },
};

export default meta;
type Story = StoryObj<TipInput>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

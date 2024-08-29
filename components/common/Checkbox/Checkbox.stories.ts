import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md'],
    },
    disabled: { control: 'boolean' },
    indeterminated: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    id: '1',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    id: '2',
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    id: '3',
    size: 'md',
    disabled: true,
  },
};

export const Indeterminated: Story = {
  args: {
    id: '4',
    size: 'md',
    indeterminated: true,
  },
};

export const Label: Story = {
  args: {
    id: '5',
    size: 'md',
    label: '모두 선택',
  },
};

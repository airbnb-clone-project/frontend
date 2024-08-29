import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    trailingIcon: { control: 'boolean' },
    disabled: { control: 'boolean' },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'secondary-white',
        'selected',
      ],
    },
    border: { control: 'boolean' },
    transition: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    size: 'md',
    color: 'primary',
    border: false,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    size: 'md',
    color: 'secondary',
    border: false,
  },
};

export const SecondaryWhite: Story = {
  args: {
    children: 'Button',
    size: 'md',
    color: 'secondary-white',
    border: false,
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Button',
    size: 'md',
    color: 'tertiary',
    border: false,
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    children: 'Button',
    size: 'md',
    color: 'secondary',
    border: false,
    trailingIcon: true,
  },
};

export const Selected: Story = {
  args: {
    children: 'Button',
    size: 'md',
    color: 'selected',
    border: false,
  },
};

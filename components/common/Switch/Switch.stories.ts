import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialSwitched: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialSwitched: false,
    disabled: false,
  },
};

export const Switched: Story = {
  args: {
    initialSwitched: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    initialSwitched: false,
    disabled: true,
  },
};

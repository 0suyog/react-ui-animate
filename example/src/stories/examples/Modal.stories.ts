import type { Meta, StoryObj } from '@storybook/react';

import Example from './Modal';

const meta = {
  title: 'Examples/Modal',
  component: Example,
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {};

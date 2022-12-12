import type { Meta, StoryObj } from '@storybook/react';

import { SearchExample } from '../src/search';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SearchExample> = {
  title: 'Example/SearchExample',
  component: SearchExample,
};

export default meta;
type Story = StoryObj<typeof SearchExample>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    primary: true,
    label: 'SearchExample',
  },
};
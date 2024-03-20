import React from 'react';

import { Teste } from './Teste';

export default {
  title: 'Example/Teste',
  component: Teste,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Teste {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Hello = Template.bind({});
Hello.args = {
  size: 'small',
  label: 'Hello Storybook',
};

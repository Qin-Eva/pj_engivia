import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from 'components/Input'

export default {
  title: 'Components/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Title = Template.bind({})
Title.args = {
  areaType: 'title'
}

export const Date = Template.bind({})
Date.args = {
  areaType: 'date'
}

export const Url = Template.bind({})
Url.args = {
  areaType: 'url'
}

export const Text = Template.bind({})
Text.args = {
  areaType: 'text'
}

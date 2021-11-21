import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TitleWithLabel } from 'components/TitleWithLabel'

export default {
  title: 'Components/TitleWithLabel',
  component: TitleWithLabel
} as ComponentMeta<typeof TitleWithLabel>

const Template: ComponentStory<typeof TitleWithLabel> = (args) => (
  <TitleWithLabel {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Title with Label',
  is_streamed: 1
}

export const Primary = Template.bind({})
Primary.args = {
  title: '放送前・エンジビア募集中',
  is_streamed: 1
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: '放送中',
  is_streamed: 2
}

export const Thirdly = Template.bind({})
Thirdly.args = {
  title: '放送済み',
  is_streamed: 3
}

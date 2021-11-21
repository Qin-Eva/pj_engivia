import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BroadcastCard } from 'components/BroadcastCard'

export default {
  title: 'Components/BroadcastCard',
  component: BroadcastCard
} as ComponentMeta<typeof BroadcastCard>

const Template: ComponentStory<typeof BroadcastCard> = (args) => (
  <BroadcastCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
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

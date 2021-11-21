import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { UserCard } from 'components/UserCard'

export default {
  title: 'Components/UserCard',
  component: UserCard
} as ComponentMeta<typeof UserCard>

const Template: ComponentStory<typeof UserCard> = (args) => (
  <UserCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  username: 'ファンキー後藤',
  img: '/Avatar.png',
  hee: 18
}

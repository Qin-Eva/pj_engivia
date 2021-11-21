import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Broadcasts } from 'components/Broadcasts'

export default {
  title: 'Components/Broadcasts',
  component: Broadcasts
} as ComponentMeta<typeof Broadcasts>

const Template: ComponentStory<typeof Broadcasts> = (args) => (
  <Broadcasts {...args} />
)

export const Default = Template.bind({})

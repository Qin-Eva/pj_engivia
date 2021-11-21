import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HeeButton } from 'components/HeeButton'

export default {
  title: 'Components/HeeButton',
  component: HeeButton
} as ComponentMeta<typeof HeeButton>

const Template: ComponentStory<typeof HeeButton> = (args) => (
  <HeeButton {...args} />
)

export const Default = Template.bind({})

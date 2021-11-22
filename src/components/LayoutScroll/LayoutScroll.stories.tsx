import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LayoutScroll from 'components/LayoutScroll'

export default {
  title: 'Components/LayoutScroll',
  component: LayoutScroll
} as ComponentMeta<typeof LayoutScroll>

const Template: ComponentStory<typeof LayoutScroll> = (args) => (
  <LayoutScroll {...args} />
)

export const Default = Template.bind({})

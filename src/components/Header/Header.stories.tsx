import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from 'components/Header'

export default {
  title: 'Components/Header',
  component: Header
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})

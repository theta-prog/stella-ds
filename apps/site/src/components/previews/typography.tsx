'use client'

import { Heading, Text } from '@stella-ds/react'

export function HeadingPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Heading level={2} size="2xl">Sans (default)</Heading>
      <Heading level={2} size="2xl" family="serif">Serif</Heading>
      <Heading level={2} size="2xl" family="display">Display</Heading>
      <Heading level={2} size="2xl" family="mono">Monospace</Heading>
    </div>
  )
}

export function TextPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text size="lg" weight="bold">Sans-serif (default)</Text>
      <Text size="lg" weight="bold" family="serif">Serif</Text>
      <Text size="lg" weight="bold" family="mono">Monospace</Text>
      <Text size="md" color="secondary">Medium Secondary</Text>
      <Text size="xs" color="disabled">Extra Small Disabled</Text>
      <Text truncate style={{ maxWidth: 200 }}>This is a very long text that will be truncated with an ellipsis</Text>
    </div>
  )
}

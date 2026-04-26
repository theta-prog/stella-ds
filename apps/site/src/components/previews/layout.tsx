'use client'

import { Avatar, Background, Badge, Separator, Stack, Text } from '@stella-ds/react'

export function BackgroundPreview() {
  return (
    <Background variant="galaxy" color="cosmos" theme="dark" style={{ height: 180, borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Text weight="semibold" style={{ color: '#f1f5f9' }}>Content over galaxy background</Text>
    </Background>
  )
}

export function SeparatorPreview() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text size="sm" color="secondary">Content above</Text>
      <Separator />
      <Text size="sm" color="secondary">Content below</Text>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: 40 }}>
        <Text size="sm">Left</Text>
        <Separator orientation="vertical" style={{ height: '100%' }} />
        <Text size="sm">Right</Text>
      </div>
    </div>
  )
}

export function StackPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <Stack direction="horizontal" gap="3" align="center">
        <Avatar alt="U" size="sm" />
        <Text weight="medium">Horizontal Stack</Text>
        <Badge color="success">Active</Badge>
      </Stack>
      <Stack direction="vertical" gap="2">
        <Text size="sm">Item 1</Text>
        <Text size="sm">Item 2</Text>
        <Text size="sm">Item 3</Text>
      </Stack>
    </div>
  )
}

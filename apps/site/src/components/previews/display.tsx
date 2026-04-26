'use client'

import { Avatar, Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Text } from '@stella-ds/react'
import { wrapStyle } from './shared'

export function AvatarPreview() {
  return (
    <div style={wrapStyle}>
      <Avatar alt="Jane Doe" size="xs" />
      <Avatar alt="Jane Doe" size="sm" />
      <Avatar alt="Jane Doe" size="md" />
      <Avatar alt="Jane Doe" size="lg" />
      <Avatar alt="Jane Doe" size="xl" />
    </div>
  )
}

export function BadgePreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={wrapStyle}>
        <Badge color="default">Default</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="error">Error</Badge>
      </div>
      <div style={wrapStyle}>
        <Badge variant="subtle" color="primary">Subtle</Badge>
        <Badge variant="outline" color="primary">Outline</Badge>
        <Badge variant="solid" color="primary">Solid</Badge>
      </div>
    </div>
  )
}

export function ButtonPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={wrapStyle}>
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="glow">Glow</Button>
      </div>
      <div style={wrapStyle}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button loading>Loading</Button>
      </div>
    </div>
  )
}

export function CardPreview() {
  return (
    <Card hoverable style={{ maxWidth: 320 }}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A short description of the card content.</CardDescription>
      </CardHeader>
      <CardContent>
        <Text size="sm" color="secondary">This is the main content area of the card.</Text>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  )
}

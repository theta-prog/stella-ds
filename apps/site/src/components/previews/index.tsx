'use client'

import {
  Alert, AlertTitle, AlertDescription,
  Avatar,
  Badge,
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator,
  Button,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Checkbox,
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription,
  Heading,
  Input,
  RadioGroup, RadioItem,
  Separator,
  Skeleton,
  Stack,
  Switch,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Text,
  Tooltip, TooltipProvider, TooltipTrigger, TooltipContent,
  Select, SelectTrigger, SelectContent, SelectItem,
  Background,
} from '@stella-ds/react'

const wrapStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
  alignItems: 'center',
}

const previews: Record<string, () => React.ReactNode> = {
  alert: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
      <Alert variant="info"><AlertTitle>Info</AlertTitle><AlertDescription>This is an informational message.</AlertDescription></Alert>
      <Alert variant="success"><AlertTitle>Success</AlertTitle><AlertDescription>Your changes have been saved.</AlertDescription></Alert>
      <Alert variant="warning"><AlertTitle>Warning</AlertTitle><AlertDescription>Please review before continuing.</AlertDescription></Alert>
      <Alert variant="error"><AlertTitle>Error</AlertTitle><AlertDescription>Something went wrong.</AlertDescription></Alert>
    </div>
  ),
  avatar: () => (
    <div style={wrapStyle}>
      <Avatar alt="Jane Doe" size="xs" />
      <Avatar alt="Jane Doe" size="sm" />
      <Avatar alt="Jane Doe" size="md" />
      <Avatar alt="Jane Doe" size="lg" />
      <Avatar alt="Jane Doe" size="xl" />
    </div>
  ),
  badge: () => (
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
  ),
  breadcrumb: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink isCurrentPage>Breadcrumb</BreadcrumbLink></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  button: () => (
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
  ),
  card: () => (
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
  ),
  checkbox: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Checkbox label="Accept terms and conditions" defaultChecked />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Required field" error />
      <Checkbox label="Disabled option" disabled />
    </div>
  ),
  dialog: () => (
    <Dialog>
      <DialogTrigger asChild><Button>Open Dialog</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone. Please confirm to proceed.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  heading: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Heading level={2} size="2xl">Sans (default)</Heading>
      <Heading level={2} size="2xl" family="serif">Serif</Heading>
      <Heading level={2} size="2xl" family="display">Display</Heading>
      <Heading level={2} size="2xl" family="mono">Monospace</Heading>
    </div>
  ),
  input: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 320 }}>
      <Input placeholder="Default input" />
      <Input placeholder="Small" size="sm" />
      <Input placeholder="Large" size="lg" />
      <Input placeholder="Email address" error="Email is required" value="" onChange={() => {}} />
    </div>
  ),
  radio: () => (
    <RadioGroup defaultValue="b">
      <RadioItem value="a" label="Option A" />
      <RadioItem value="b" label="Option B" />
      <RadioItem value="c" label="Option C" />
      <RadioItem value="d" label="Disabled" disabled />
    </RadioGroup>
  ),
  separator: () => (
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
  ),
  skeleton: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
      <Skeleton variant="text" lines={3} />
      <div style={wrapStyle}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={48} height={48} />
      </div>
      <Skeleton variant="rectangular" width="100%" height={80} />
    </div>
  ),
  stack: () => (
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
  ),
  switch: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Switch label="Enable notifications" defaultChecked />
      <Switch label="Dark mode" size="sm" />
      <Switch label="Error state" error />
      <Switch label="Disabled" disabled />
    </div>
  ),
  tabs: () => (
    <Tabs defaultValue="overview" style={{ width: '100%' }}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="overview"><Text size="sm" color="secondary">Overview content goes here.</Text></TabsContent>
      <TabsContent value="settings"><Text size="sm" color="secondary">Settings content goes here.</Text></TabsContent>
      <TabsContent value="activity"><Text size="sm" color="secondary">Activity content goes here.</Text></TabsContent>
    </Tabs>
  ),
  text: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text size="lg" weight="bold">Sans-serif (default)</Text>
      <Text size="lg" weight="bold" family="serif">Serif</Text>
      <Text size="lg" weight="bold" family="mono">Monospace</Text>
      <Text size="md" color="secondary">Medium Secondary</Text>
      <Text size="xs" color="disabled">Extra Small Disabled</Text>
      <Text truncate style={{ maxWidth: 200 }}>This is a very long text that will be truncated with an ellipsis</Text>
    </div>
  ),
  tooltip: () => (
    <TooltipProvider>
      <div style={wrapStyle}>
        <Tooltip>
          <TooltipTrigger asChild><Button variant="outline">Hover me (top)</Button></TooltipTrigger>
          <TooltipContent side="top">Helpful hint text</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild><Button variant="outline">Hover me (bottom)</Button></TooltipTrigger>
          <TooltipContent side="bottom">Appears below</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
  select: () => (
    <div style={{ maxWidth: 240 }}>
      <Select>
        <SelectTrigger placeholder="Pick a fruit" />
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
          <SelectItem value="mango">Mango</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  background: () => (
    <Background variant="galaxy" color="cosmos" theme="dark" style={{ height: 180, borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Text weight="semibold" style={{ color: '#f1f5f9' }}>Content over galaxy background</Text>
    </Background>
  ),
}

interface ComponentPreviewProps {
  slug: string
}

export function ComponentPreview({ slug }: ComponentPreviewProps) {
  const factory = previews[slug]
  if (!factory) return null

  return (
    <section style={{ marginBottom: '2.5rem' }}>
      <h2 style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.25rem', color: 'var(--stella-color-starlight-primary)', paddingBottom: '0.5rem', borderBottom: '1px solid var(--stella-color-void-muted)' }}>
        Preview
      </h2>
      <div style={{
        background: 'var(--stella-color-void-surface)',
        border: '1px solid var(--stella-color-void-muted)',
        borderRadius: '0.5rem',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '120px',
      }}>
        {factory()}
      </div>
    </section>
  )
}

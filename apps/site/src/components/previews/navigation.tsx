'use client'

import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from '@stella-ds/react'

export function BreadcrumbPreview() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink isCurrentPage>Breadcrumb</BreadcrumbLink></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function TabsPreview() {
  return (
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
  )
}

export function CarouselPreview() {
  const slides = [
    {
      title: 'Launch faster',
      description: 'Accessible primitives, tokens, and docs that give product surfaces a cohesive starting point.',
    },
    {
      title: 'Shape the mood',
      description: 'Move between base, surface, and accent treatments without rebuilding the whole composition.',
    },
    {
      title: 'Ship in one system',
      description: 'Storybook stories, preview snippets, and package exports stay aligned as the component set grows.',
    },
  ]

  return (
    <div style={{ width: '100%', maxWidth: '32rem', display: 'grid', gap: '0.75rem' }}>
      <Carousel aria-label="Featured highlights" slideAlign="center" style={{ width: '100%' }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.title}>
              <Card
                style={{
                  minHeight: '11.5rem',
                  background:
                    index === 0
                      ? 'linear-gradient(135deg, color-mix(in srgb, var(--stella-color-cosmos-500) 18%, var(--stella-color-void-surface)) 0%, var(--stella-color-void-surface) 76%)'
                      : 'linear-gradient(135deg, color-mix(in srgb, var(--stella-color-aurora-500) 14%, var(--stella-color-void-surface)) 0%, var(--stella-color-void-surface) 78%)',
                }}
              >
                <CardContent style={{ display: 'grid', gap: '0.75rem', padding: '1.5rem' }}>
                  <Badge variant="subtle" color={index === 0 ? 'primary' : 'success'}>
                    0{index + 1}
                  </Badge>
                  <Text as="div" weight="semibold" size="lg">
                    {slide.title}
                  </Text>
                  <Text size="sm" color="secondary" style={{ margin: 0, lineHeight: 1.6 }}>
                    {slide.description}
                  </Text>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
          <CarouselPrevious />
          <Text size="sm" color="secondary" style={{ margin: 0, textAlign: 'center' }}>
            Drag, swipe, or use the controls.
          </Text>
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  )
}

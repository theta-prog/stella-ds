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
  CarouselDots,
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
  const cardSlides = [
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

  const imageSlides = [
    {
      title: 'Project Atlas',
      description: 'A documentation shell with rounded media framing and exact-fit edge alignment.',
    },
    {
      title: 'Project Nova',
      description: 'A compact gallery card that still keeps the outer border and shadow fully visible.',
    },
  ]

  return (
    <div style={{ width: '100%', maxWidth: '40rem', display: 'grid', gap: '1.25rem' }}>
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        <Text as="div" size="xs" color="secondary" weight="semibold" style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Two-up cards
        </Text>
        <Carousel
          aria-label="Featured highlights"
          slideAlign="smart"
          slidesPerView={2}
          style={{ width: '100%' }}
        >
          <CarouselContent>
            {cardSlides.map((slide, index) => (
              <CarouselItem key={slide.title}>
                <Card hoverable style={{ minHeight: '11.5rem', height: '100%' }}>
                  <CardContent style={{ display: 'grid', gap: '0.75rem', padding: '1.25rem', height: '100%', alignContent: 'start' }}>
                    <Badge variant="subtle" color="primary">
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
            <CarouselDots aria-label="Slide indicators" />
            <CarouselNext />
          </div>
        </Carousel>
      </div>

      <div style={{ display: 'grid', gap: '0.75rem' }}>
        <Text as="div" size="xs" color="secondary" weight="semibold" style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Exact-fit images
        </Text>
        <Carousel
          aria-label="Exact-fit gallery"
          slideAlign="smart"
          slidesPerView={2}
          style={{ width: '100%' }}
        >
          <CarouselContent>
            {imageSlides.map((slide, index) => (
              <CarouselItem key={slide.title}>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '4 / 3',
                      overflow: 'hidden',
                      borderRadius: '1rem',
                      border: '1px solid color-mix(in srgb, var(--stella-color-starlight-primary) 12%, var(--stella-color-void-muted))',
                      background: 'var(--stella-color-void-surface)',
                      boxShadow: 'var(--stella-shadow-md)',
                    }}
                  >
                    <div style={{ position: 'absolute', insetInlineStart: '0.875rem', insetBlockStart: '0.875rem' }}>
                      <Badge variant="subtle" color="primary">
                        0{index + 1}
                      </Badge>
                    </div>
                    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', padding: '1rem' }}>
                      <Text as="div" weight="semibold" size="md" style={{ margin: 0, textAlign: 'center' }}>
                        {slide.title}
                      </Text>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gap: '0.375rem', paddingInline: '0.25rem' }}>
                    <Text as="div" weight="semibold" size="sm" style={{ margin: 0 }}>
                      {slide.title}
                    </Text>
                    <Text size="xs" color="secondary" style={{ margin: 0, lineHeight: 1.6 }}>
                      {slide.description}
                    </Text>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
            <CarouselPrevious />
            <Text size="sm" color="secondary" style={{ margin: 0, textAlign: 'center' }}>
              Two slides fit exactly with no edge clipping.
            </Text>
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

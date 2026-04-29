import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, waitFor } from 'storybook/test';
import {
  Badge,
  Button,
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Heading,
  Text,
  type CarouselApi,
  type CarouselProps,
} from '@stella-ds/react';
import { useT, translations } from '../i18n';

type CarouselShowcaseProps = Pick<
  CarouselProps,
  'loop' | 'slideAlign' | 'slidesPerView'
> & {
  withApi?: boolean;
  controls?: CarouselControlPlacement;
};

type CarouselControlPlacement = 'below' | 'inside-always' | 'inside-hover' | 'outside';

type CardsPerView = 1 | 2 | 3;

const horizontalFrameStyle: React.CSSProperties = {
  width: 'min(100%, 40rem)',
  display: 'grid',
  gap: '1rem',
  marginInline: 'auto',
  boxSizing: 'border-box',
};

const controlButtonStyle: React.CSSProperties = {
  pointerEvents: 'auto',
};

const insideControlButtonStyle: React.CSSProperties = {
  ...controlButtonStyle,
  background: 'color-mix(in srgb, var(--stella-color-void-overlay) 88%, transparent)',
  borderColor: 'color-mix(in srgb, var(--stella-color-starlight-primary) 10%, var(--stella-color-void-muted))',
};

const imageFrameStyle: React.CSSProperties = {
  width: 'min(100%, 40rem)',
  display: 'grid',
  gap: '1rem',
  marginInline: 'auto',
  boxSizing: 'border-box',
};

const cardsFrameStyle: React.CSSProperties = {
  width: 'min(100%, 64rem)',
  display: 'grid',
  gap: '1rem',
  marginInline: 'auto',
  boxSizing: 'border-box',
};

const cardsPerViewOptions: CardsPerView[] = [1, 2, 3];
const cardsPerViewDocsSource = `<Carousel loop={false} slideAlign="start" slidesPerView={2} aria-label="Featured highlights">
  <CarouselContent>
    <CarouselItem>
      <Card hoverable>
        <CardContent>Slide one</CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card hoverable>
        <CardContent>Slide two</CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card hoverable>
        <CardContent>Slide three</CardContent>
      </Card>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

function getShowcaseSlides(tr: ReturnType<typeof useT>) {
  return [
    {
      title: tr.carousel.label_slide_1,
      description: tr.carousel.desc_slide_1,
    },
    {
      title: tr.carousel.label_slide_2,
      description: tr.carousel.desc_slide_2,
    },
    {
      title: tr.carousel.label_slide_3,
      description: tr.carousel.desc_slide_3,
    },
    {
      title: tr.carousel.label_slide_4,
      description: tr.carousel.desc_slide_4,
    },
  ];
}

function GalleryPlaceholder() {
  return (
    <svg
      viewBox="0 0 1600 900"
      aria-hidden="true"
      focusable="false"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        aspectRatio: '16 / 9',
      }}
    >
      <rect width="1600" height="900" fill="var(--stella-color-void-base, #0d1117)" />
      <rect
        x="96"
        y="96"
        width="1408"
        height="708"
        rx="32"
        fill="var(--stella-color-void-surface, #15161b)"
        stroke="var(--stella-color-void-muted, #2b2e35)"
        strokeWidth="2"
      />
      <line x1="96" y1="332" x2="1504" y2="332" stroke="var(--stella-color-starlight-primary, #f0f0f5)" strokeOpacity="0.08" />
      <line x1="96" y1="568" x2="1504" y2="568" stroke="var(--stella-color-starlight-primary, #f0f0f5)" strokeOpacity="0.08" />
      <line x1="565" y1="96" x2="565" y2="804" stroke="var(--stella-color-starlight-primary, #f0f0f5)" strokeOpacity="0.08" />
      <line x1="1035" y1="96" x2="1035" y2="804" stroke="var(--stella-color-starlight-primary, #f0f0f5)" strokeOpacity="0.08" />
      <rect x="144" y="144" width="248" height="18" rx="9" fill="var(--stella-color-cosmos-400, #818cf8)" fillOpacity="0.72" />
      <rect x="144" y="192" width="924" height="14" rx="7" fill="var(--stella-color-starlight-secondary, #8888a0)" fillOpacity="0.32" />
      <rect x="144" y="232" width="712" height="14" rx="7" fill="var(--stella-color-starlight-secondary, #8888a0)" fillOpacity="0.2" />
      <rect x="144" y="396" width="376" height="124" rx="24" fill="var(--stella-color-void-overlay, #1b1d24)" />
      <rect x="612" y="396" width="376" height="124" rx="24" fill="var(--stella-color-void-overlay, #1b1d24)" />
      <rect x="1080" y="396" width="376" height="124" rx="24" fill="var(--stella-color-void-overlay, #1b1d24)" />
      <rect x="144" y="620" width="610" height="136" rx="24" fill="var(--stella-color-void-overlay, #1b1d24)" />
      <rect x="790" y="620" width="666" height="136" rx="24" fill="var(--stella-color-void-overlay, #1b1d24)" />
    </svg>
  );
}

function useCarouselStatus(api: CarouselApi | undefined, totalSlides: number) {
  const [status, setStatus] = React.useState({
    current: 1,
    total: totalSlides,
  });

  React.useEffect(() => {
    setStatus((currentStatus) => ({
      current: Math.min(currentStatus.current, Math.max(totalSlides, 1)),
      total: totalSlides,
    }));
  }, [totalSlides]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const syncStatus = () => {
      const snapCount = api.scrollSnapList().length || totalSlides;

      setStatus({
        current: api.selectedScrollSnap() + 1,
        total: snapCount,
      });
    };

    syncStatus();
    api.on('select', syncStatus);
    api.on('reInit', syncStatus);

    return () => {
      api.off('select', syncStatus);
      api.off('reInit', syncStatus);
    };
  }, [api, totalSlides]);

  return status;
}

function findCarouselViewportElement(root: HTMLElement) {
  const viewport = Array.from(root.querySelectorAll<HTMLElement>('div')).find((element) => {
    const computedStyle = getComputedStyle(element);

    return computedStyle.overflowX === 'hidden' || computedStyle.overflow === 'hidden';
  });

  if (!viewport) {
    throw new Error('Carousel viewport not found.');
  }

  return viewport;
}

function CarouselStatusControls({
  previousLabel,
  nextLabel,
  status,
}: {
  previousLabel: string;
  nextLabel: string;
  status: { current: number; total: number };
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
      }}
    >
      <CarouselPrevious aria-label={previousLabel} style={controlButtonStyle} />
      <Text size="sm" color="secondary" style={{ margin: 0 }}>
        {status.current} / {status.total}
      </Text>
      <CarouselNext aria-label={nextLabel} style={controlButtonStyle} />
    </div>
  );
}

function CarouselShowcase({
  loop = false,
  slideAlign = 'center',
  slidesPerView = 1,
  withApi = false,
  controls = 'below',
}: CarouselShowcaseProps) {
  const tr = useT();
  const slides = getShowcaseSlides(tr);
  const [api, setApi] = React.useState<CarouselApi>();
  const status = useCarouselStatus(api, slides.length);
  const isOverlayControls = controls !== 'below';
  const hoverRevealControls = controls === 'inside-hover';
  const [controlsVisible, setControlsVisible] = React.useState(false);
  const frameStyle = {
    ...horizontalFrameStyle,
    paddingInline: controls === 'outside' ? '2.75rem' : '0.75rem',
  };
  const overlayControlsStyle: React.CSSProperties = {
    position: 'absolute',
    insetBlockStart: '50%',
    insetInline: controls === 'outside' ? '-1.375rem' : '1rem',
    transform: hoverRevealControls && !controlsVisible
      ? 'translateY(-50%) scale(0.96)'
      : 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    pointerEvents: 'none',
    zIndex: 3,
    opacity: hoverRevealControls && !controlsVisible ? 0 : 1,
    visibility: hoverRevealControls && !controlsVisible ? 'hidden' : 'visible',
    transition: hoverRevealControls ? 'opacity 180ms ease, transform 180ms ease' : undefined,
  };

  React.useEffect(() => {
    if (!hoverRevealControls) {
      return;
    }

    setControlsVisible(false);
  }, [hoverRevealControls, loop, slideAlign]);

  const handleShowControls = () => {
    if (hoverRevealControls) {
      setControlsVisible(true);
    }
  };

  const handleHideControls = (event?: React.FocusEvent<HTMLDivElement>) => {
    if (!hoverRevealControls) {
      return;
    }

    if (event) {
      const nextFocused = event.relatedTarget;

      if (nextFocused instanceof Node && event.currentTarget.contains(nextFocused)) {
        return;
      }
    }

    setControlsVisible(false);
  };

  const renderControls = () => {
    if (controls === 'below') {
      return (
        <CarouselStatusControls
          previousLabel={tr.carousel.label_previous}
          nextLabel={tr.carousel.label_next}
          status={status}
        />
      );
    }

    return (
      <div style={overlayControlsStyle}>
        <CarouselPrevious
          aria-label={tr.carousel.label_previous}
          style={controls === 'outside' ? controlButtonStyle : insideControlButtonStyle}
        />
        <CarouselNext
          aria-label={tr.carousel.label_next}
          style={controls === 'outside' ? controlButtonStyle : insideControlButtonStyle}
        />
      </div>
    );
  };

  return (
    <div style={frameStyle}>
      {withApi ? (
        <Text size="sm" color="secondary" style={{ margin: 0 }}>
          {tr.carousel.label_status}: {status.current} / {status.total}
        </Text>
      ) : null}

      <div
        style={{ position: 'relative' }}
        onMouseEnter={handleShowControls}
        onMouseLeave={() => handleHideControls()}
        onFocusCapture={handleShowControls}
        onBlurCapture={handleHideControls}
      >
        <Carousel
          loop={loop}
          slideAlign={slideAlign}
          slidesPerView={slidesPerView}
          setApi={setApi}
          aria-label={tr.carousel.label_carousel}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.title}>
                <Card style={{ height: '100%', minHeight: '15rem' }}>
                  <CardContent
                    style={{
                      padding: '1.5rem',
                      display: 'grid',
                      gap: '0.875rem',
                      height: '100%',
                      alignContent: 'start',
                    }}
                  >
                    <Badge variant="subtle" color="primary">
                      0{index + 1}
                    </Badge>
                    <Heading level={3} size="lg" style={{ margin: 0 }}>
                      {slide.title}
                    </Heading>
                    <Text color="secondary" style={{ margin: 0, lineHeight: 1.65 }}>
                      {slide.description}
                    </Text>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {renderControls()}
        </Carousel>
      </div>

      {isOverlayControls ? (
        <Text size="sm" color="secondary" style={{ margin: 0, textAlign: 'center' }}>
          {status.current} / {status.total}
        </Text>
      ) : null}
    </div>
  );
}

function ImageCarouselShowcase({
  loop = false,
  slidesPerView = 1,
  controls = 'below',
}: Pick<CarouselProps, 'loop' | 'slidesPerView'> & {
  controls?: CarouselControlPlacement;
}) {
  const tr = useT();
  const slides = getShowcaseSlides(tr);
  const [api, setApi] = React.useState<CarouselApi>();
  const status = useCarouselStatus(api, slides.length);
  const isOverlayControls = controls !== 'below';
  const hoverRevealControls = controls === 'inside-hover';
  const [controlsVisible, setControlsVisible] = React.useState(false);
  const frameStyle = {
    ...imageFrameStyle,
    paddingInline: controls === 'outside' ? '2.75rem' : '0.75rem',
  };
  const overlayControlsStyle: React.CSSProperties = {
    position: 'absolute',
    insetBlockStart: '50%',
    insetInline: controls === 'outside' ? '-1.375rem' : '1rem',
    transform: hoverRevealControls && !controlsVisible
      ? 'translateY(-50%) scale(0.96)'
      : 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    pointerEvents: 'none',
    zIndex: 3,
    opacity: hoverRevealControls && !controlsVisible ? 0 : 1,
    visibility: hoverRevealControls && !controlsVisible ? 'hidden' : 'visible',
    transition: hoverRevealControls ? 'opacity 180ms ease, transform 180ms ease' : undefined,
  };

  React.useEffect(() => {
    if (!hoverRevealControls) {
      return;
    }

    setControlsVisible(false);
  }, [hoverRevealControls, loop, slidesPerView]);

  const handleShowControls = () => {
    if (hoverRevealControls) {
      setControlsVisible(true);
    }
  };

  const handleHideControls = (event?: React.FocusEvent<HTMLDivElement>) => {
    if (!hoverRevealControls) {
      return;
    }

    if (event) {
      const nextFocused = event.relatedTarget;

      if (nextFocused instanceof Node && event.currentTarget.contains(nextFocused)) {
        return;
      }
    }

    setControlsVisible(false);
  };

  const renderControls = () => {
    if (controls === 'below') {
      return (
        <CarouselStatusControls
          previousLabel={tr.carousel.label_previous}
          nextLabel={tr.carousel.label_next}
          status={status}
        />
      );
    }

    return (
      <div style={overlayControlsStyle}>
        <CarouselPrevious
          aria-label={tr.carousel.label_previous}
          style={controls === 'outside' ? controlButtonStyle : insideControlButtonStyle}
        />
        <CarouselNext
          aria-label={tr.carousel.label_next}
          style={controls === 'outside' ? controlButtonStyle : insideControlButtonStyle}
        />
      </div>
    );
  };

  return (
    <div style={frameStyle}>
      <div
        style={{ position: 'relative' }}
        onMouseEnter={handleShowControls}
        onMouseLeave={() => handleHideControls()}
        onFocusCapture={handleShowControls}
        onBlurCapture={handleHideControls}
      >
        <Carousel
          loop={loop}
          slideAlign="center"
          slidesPerView={slidesPerView}
          setApi={setApi}
          aria-label={tr.carousel.label_gallery}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.title} slideLabel={slide.title}>
                <figure style={{ margin: 0, display: 'grid', gap: '0.875rem' }}>
                  <div
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '1rem',
                      border: '1px solid color-mix(in srgb, var(--stella-color-starlight-primary) 12%, var(--stella-color-void-muted))',
                      background: 'var(--stella-color-void-surface)',
                      boxShadow: 'var(--stella-shadow-md)',
                    }}
                  >
                    <GalleryPlaceholder />
                    <div
                      style={{
                        position: 'absolute',
                        insetInlineStart: '1rem',
                        insetBlockStart: '1rem',
                      }}
                    >
                      <Badge variant="subtle" color="primary">
                        0{index + 1}
                      </Badge>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gap: '0.5rem', paddingInline: '0.25rem' }}>
                    <Heading level={3} size="lg" style={{ margin: 0 }}>
                      {slide.title}
                    </Heading>
                    <Text color="secondary" style={{ margin: 0, lineHeight: 1.65 }}>
                      {slide.description}
                    </Text>
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          {renderControls()}
        </Carousel>
      </div>

      {isOverlayControls ? (
        <Text size="sm" color="secondary" style={{ margin: 0, textAlign: 'center' }}>
          {status.current} / {status.total}
        </Text>
      ) : null}
    </div>
  );
}

function CardsPerViewShowcase({ loop = false }: Pick<CarouselProps, 'loop'>) {
  const tr = useT();
  const slides = getShowcaseSlides(tr);
  const [cardsPerView, setCardsPerView] = React.useState<CardsPerView>(2);
  const [api, setApi] = React.useState<CarouselApi>();
  const status = useCarouselStatus(api, slides.length);

  React.useEffect(() => {
    api?.scrollTo(0);
  }, [api, cardsPerView]);

  return (
    <div style={cardsFrameStyle}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          flexWrap: 'wrap',
        }}
      >
        <Text size="sm" color="secondary" style={{ margin: 0 }}>
          {tr.carousel.label_cards_per_view}: {cardsPerView}
        </Text>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {cardsPerViewOptions.map((value) => (
            <Button
              key={value}
              size="sm"
              variant={cardsPerView === value ? 'solid' : 'ghost'}
              aria-label={`${tr.carousel.label_cards_per_view} ${value}`}
              aria-pressed={cardsPerView === value}
              onClick={() => setCardsPerView(value)}
            >
              {value}
            </Button>
          ))}
        </div>
      </div>

      <Text size="sm" color="secondary" style={{ margin: 0, lineHeight: 1.65 }}>
        {tr.carousel.desc_cards_per_view}
      </Text>

      <Carousel
        loop={loop}
        slideAlign="start"
        slidesPerView={cardsPerView}
        setApi={setApi}
        aria-label={tr.carousel.label_carousel}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.title} slideLabel={slide.title}>
              <Card hoverable style={{ height: '100%', minHeight: '14rem' }}>
                <CardContent
                  style={{
                    padding: '1.25rem',
                    display: 'grid',
                    gap: '0.75rem',
                    height: '100%',
                    alignContent: 'start',
                  }}
                >
                  <Badge variant="subtle" color="primary">
                    0{index + 1}
                  </Badge>
                  <Heading level={3} size="lg" style={{ margin: 0 }}>
                    {slide.title}
                  </Heading>
                  <Text color="secondary" style={{ margin: 0, lineHeight: 1.65 }}>
                    {slide.description}
                  </Text>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselStatusControls
          previousLabel={tr.carousel.label_previous}
          nextLabel={tr.carousel.label_next}
          status={status}
        />
      </Carousel>
    </div>
  );
}

function CardsEdgeBleedRegressionShowcase() {
  const tr = useT();
  const slides = getShowcaseSlides(tr);
  const [api, setApi] = React.useState<CarouselApi>();
  const status = useCarouselStatus(api, slides.length);

  return (
    <div style={cardsFrameStyle}>
      <Carousel
        loop={false}
        slideAlign="smart"
        slidesPerView={2}
        setApi={setApi}
        aria-label={tr.carousel.label_carousel}
        data-testid="edge-bleed-carousel"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.title} slideLabel={slide.title}>
              <Card
                hoverable
                data-testid={`edge-bleed-card-${index}`}
                style={{ height: '100%', minHeight: '14rem' }}
              >
                <CardContent
                  style={{
                    padding: '1.25rem',
                    display: 'grid',
                    gap: '0.75rem',
                    height: '100%',
                    alignContent: 'start',
                  }}
                >
                  <Badge variant="subtle" color="primary">
                    0{index + 1}
                  </Badge>
                  <Heading level={3} size="lg" style={{ margin: 0 }}>
                    {slide.title}
                  </Heading>
                  <Text color="secondary" style={{ margin: 0, lineHeight: 1.65 }}>
                    {slide.description}
                  </Text>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselStatusControls
          previousLabel={tr.carousel.label_previous}
          nextLabel={tr.carousel.label_next}
          status={status}
        />
      </Carousel>
    </div>
  );
}

function ImagesExactFitRegressionShowcase() {
  const tr = useT();
  const slides = getShowcaseSlides(tr).slice(0, 2);
  const [api, setApi] = React.useState<CarouselApi>();
  const status = useCarouselStatus(api, slides.length);

  return (
    <div style={imageFrameStyle}>
      <Carousel
        loop={false}
        slideAlign="smart"
        slidesPerView={2}
        setApi={setApi}
        aria-label={tr.carousel.label_gallery}
        data-testid="exact-fit-carousel"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.title} slideLabel={slide.title}>
              <figure
                data-testid={`exact-fit-figure-${index}`}
                style={{ margin: 0, display: 'grid', gap: '0.875rem' }}
              >
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '1rem',
                    border: '1px solid color-mix(in srgb, var(--stella-color-starlight-primary) 12%, var(--stella-color-void-muted))',
                    background: 'var(--stella-color-void-surface)',
                    boxShadow: 'var(--stella-shadow-md)',
                  }}
                >
                  <GalleryPlaceholder />
                  <div
                    style={{
                      position: 'absolute',
                      insetInlineStart: '1rem',
                      insetBlockStart: '1rem',
                    }}
                  >
                    <Badge variant="subtle" color="primary">
                      0{index + 1}
                    </Badge>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '0.5rem', paddingInline: '0.25rem' }}>
                  <Heading level={3} size="lg" style={{ margin: 0 }}>
                    {slide.title}
                  </Heading>
                  <Text color="secondary" style={{ margin: 0, lineHeight: 1.65 }}>
                    {slide.description}
                  </Text>
                </div>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselStatusControls
          previousLabel={tr.carousel.label_previous}
          nextLabel={tr.carousel.label_next}
          status={status}
        />
      </Carousel>
    </div>
  );
}

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
    docs: { description: { component: translations.en.carousel.componentDescription } },
  },
  tags: ['autodocs'],
  argTypes: {
    loop: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    slidesPerView: {
      control: { type: 'number', min: 0.5, step: 0.25 },
      table: { defaultValue: { summary: '1' } },
    },
    slideAlign: {
      control: 'select',
      options: ['smart', 'start', 'center', 'end'],
      table: { defaultValue: { summary: 'center' } },
    },
    setApi: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: translations.en.carousel.story_default,
  args: {
    loop: false,
    slideAlign: 'center',
    slidesPerView: 1,
  },
  render: (args) => <CarouselShowcase {...args} />,
  play: async ({ canvas, userEvent }) => {
    const previousButton = canvas.getByRole('button', {
      name: translations.en.carousel.label_previous,
    });
    const nextButton = canvas.getByRole('button', {
      name: translations.en.carousel.label_next,
    });

    // Wait for Embla to initialize — canScrollNext starts false until the
    // first useEffect fires and Embla computes scroll-snap positions.
    await waitFor(() => {
      expect(previousButton).toBeDisabled();
      expect(nextButton).toBeEnabled();
    }, { timeout: 3000 });

    await userEvent.click(nextButton);

    await waitFor(() => expect(previousButton).toBeEnabled(), { timeout: 3000 });
  },
  parameters: {
    docs: {
      description: {
        story:
          'A horizontal carousel with slide cards and previous / next controls. The region is keyboard-focusable and announces the active slide count.',
      },
    },
  },
};

export const Loop: Story = {
  name: translations.en.carousel.story_loop,
  args: {
    loop: true,
    slideAlign: 'center',
    slidesPerView: 1,
  },
  render: (args) => <CarouselShowcase {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Looping mode keeps both controls available and wraps from the last slide back to the first.',
      },
    },
  },
};

export const Images: Story = {
  name: translations.en.carousel.story_images,
  args: {
    loop: false,
    slidesPerView: 1,
  },
  render: ({ loop, slidesPerView }) => (
    <ImageCarouselShowcase loop={loop} slidesPerView={slidesPerView} />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'An image-first gallery example. The carousel stays generic and the image content lives entirely inside each CarouselItem.',
      },
    },
  },
  argTypes: {
    slideAlign: { table: { disable: true }, control: false },
  },
};

export const ImagesInside: Story = {
  name: translations.en.carousel.story_imagesInside,
  args: {
    loop: false,
    slidesPerView: 1.1,
  },
  render: ({ loop, slidesPerView }) => (
    <ImageCarouselShowcase
      loop={loop}
      slidesPerView={slidesPerView}
      controls="inside-always"
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Image slides can also use inside controls. Fractional `slidesPerView` values let the next image peek in without dropping the overlay treatment.',
      },
    },
  },
  argTypes: {
    slideAlign: { table: { disable: true }, control: false },
  },
};

export const CardsPerView: Story = {
  name: translations.en.carousel.story_cardsPerView,
  args: {
    loop: false,
  },
  render: ({ loop }) => <CardsPerViewShowcase loop={loop} />,
  parameters: {
    docs: {
      description: {
        story:
          'Use the root `slidesPerView` prop for common multi-card layouts. If you need asymmetrical widths, you can still override each CarouselItem flex-basis directly.',
      },
      source: {
        code: cardsPerViewDocsSource,
      },
    },
  },
  argTypes: {
    slideAlign: { table: { disable: true }, control: false },
    slidesPerView: { table: { disable: true }, control: false },
  },
};

export const TwoUpEdgeBleedRegression: Story = {
  name: 'Two-up edge bleed regression',
  render: () => <CardsEdgeBleedRegressionShowcase />,
  play: async ({ canvasElement }) => {
    const carousel = canvasElement.querySelector('[data-testid="edge-bleed-carousel"]');
    const firstCard = canvasElement.querySelector('[data-testid="edge-bleed-card-0"]');
    const secondCard = canvasElement.querySelector('[data-testid="edge-bleed-card-1"]');

    if (!(carousel instanceof HTMLElement) || !(firstCard instanceof HTMLElement) || !(secondCard instanceof HTMLElement)) {
      throw new Error('Carousel regression elements not found.');
    }

    const viewport = findCarouselViewportElement(carousel);

    await waitFor(() => {
      const viewportRect = viewport.getBoundingClientRect();
      const firstRect = firstCard.getBoundingClientRect();
      const secondRect = secondCard.getBoundingClientRect();

      expect(firstRect.left - viewportRect.left).toBeGreaterThanOrEqual(4);
      expect(viewportRect.right - secondRect.right).toBeGreaterThanOrEqual(4);
    }, { timeout: 3000 });
  },
  parameters: {
    docs: {
      description: {
        story:
          'Regression coverage for two-up, hoverable card layouts. The default viewport bleed should keep both outer cards fully inside the clipped viewport without consumer CSS overrides.',
      },
    },
  },
  argTypes: {
    loop: { table: { disable: true }, control: false },
    slideAlign: { table: { disable: true }, control: false },
    slidesPerView: { table: { disable: true }, control: false },
  },
};

export const ImagesExactFitRegression: Story = {
  name: 'Images exact-fit regression',
  render: () => <ImagesExactFitRegressionShowcase />,
  play: async ({ canvas, canvasElement }) => {
    const previousButton = canvas.getByRole('button', {
      name: translations.en.carousel.label_previous,
    });
    const nextButton = canvas.getByRole('button', {
      name: translations.en.carousel.label_next,
    });
    const carousel = canvasElement.querySelector('[data-testid="exact-fit-carousel"]');
    const firstFigure = canvasElement.querySelector('[data-testid="exact-fit-figure-0"]');
    const secondFigure = canvasElement.querySelector('[data-testid="exact-fit-figure-1"]');

    if (!(carousel instanceof HTMLElement) || !(firstFigure instanceof HTMLElement) || !(secondFigure instanceof HTMLElement)) {
      throw new Error('Exact-fit regression elements not found.');
    }

    const viewport = findCarouselViewportElement(carousel);

    await waitFor(() => {
      const viewportRect = viewport.getBoundingClientRect();
      const firstRect = firstFigure.getBoundingClientRect();
      const secondRect = secondFigure.getBoundingClientRect();

      expect(previousButton).toBeDisabled();
      expect(nextButton).toBeDisabled();
      expect(firstRect.left - viewportRect.left).toBeGreaterThanOrEqual(4);
      expect(viewportRect.right - secondRect.right).toBeGreaterThanOrEqual(4);
    }, { timeout: 3000 });
  },
  parameters: {
    docs: {
      description: {
        story:
          'Regression coverage for exact-fit image pairs. When the slide count matches slidesPerView, both images should sit fully inside the viewport and navigation should stay disabled.',
      },
    },
  },
  argTypes: {
    loop: { table: { disable: true }, control: false },
    slideAlign: { table: { disable: true }, control: false },
    slidesPerView: { table: { disable: true }, control: false },
  },
};

export const InsideAlways: Story = {
  name: translations.en.carousel.story_insideAlways,
  args: {
    loop: false,
    slideAlign: 'center',
    slidesPerView: 1.15,
  },
  render: (args) => <CarouselShowcase {...args} controls="inside-always" />,
  parameters: {
    docs: {
      description: {
        story:
          'The controls sit inside the card area and stay visible at all times. This works well for editorial cards or hero banners.',
      },
    },
  },
};

export const InsideHover: Story = {
  name: translations.en.carousel.story_insideHover,
  args: {
    loop: false,
    slideAlign: 'center',
    slidesPerView: 1.15,
  },
  render: (args) => <CarouselShowcase {...args} controls="inside-hover" />,
  parameters: {
    docs: {
      description: {
        story:
          'Controls reveal on hover or when focus enters the carousel, keeping the card surface quieter by default while preserving keyboard access.',
      },
    },
  },
};

export const OutsideControls: Story = {
  name: translations.en.carousel.story_outside,
  args: {
    loop: false,
    slideAlign: 'center',
    slidesPerView: 1,
  },
  render: (args) => <CarouselShowcase {...args} controls="outside" />,
  parameters: {
    docs: {
      description: {
        story:
          'Controls sit just outside the card height so the slide content stays clean while navigation remains visually prominent.',
      },
    },
  },
};

export const WithApi: Story = {
  name: translations.en.carousel.story_withApi,
  args: {
    loop: false,
    slideAlign: 'center',
    slidesPerView: 1,
  },
  render: (args) => <CarouselShowcase {...args} withApi />,
  parameters: {
    docs: {
      description: {
        story:
          'Using `setApi` to derive external UI state. The label above the carousel reflects the active slide in real time.',
      },
    },
  },
};
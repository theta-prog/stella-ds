'use client';

import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './Carousel.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export type CarouselApi = NonNullable<ReturnType<typeof useEmblaCarousel>[1]>;
export type CarouselSlideAlign = 'start' | 'center' | 'end' | 'smart';

type EmblaSlideAlign = Exclude<CarouselSlideAlign, 'smart'>;
type EmblaContainScroll = false | 'trimSnaps' | 'keepSnaps';
type CarouselAlignResolver = (viewSize: number, snapSize: number, index: number) => number;

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the carousel should wrap around at the ends */
  loop?: boolean;
  /** Embla snap alignment. */
  slideAlign?: CarouselSlideAlign;
  /** How many slides should fit inside one viewport. Accepts fractional values for peeking layouts. */
  slidesPerView?: number;
  /** Exposes the underlying Embla API for advanced control */
  setApi?: (api: CarouselApi) => void;
  /** Automatically advance slides on an interval */
  autoplay?: boolean;
  /** Milliseconds between auto-advances (default: 3000) */
  autoplayInterval?: number;
  /** Pause autoplay when the pointer enters or focus moves inside the carousel (default: true) */
  pauseOnHover?: boolean;
}

export type CarouselContentProps = React.HTMLAttributes<HTMLDivElement>;

type CarouselItemPrivateProps = {
  slideIndex?: number;
  slideCount?: number;
};

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional accessible label override for the slide */
  slideLabel?: string;
}

export type CarouselPreviousProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type CarouselNextProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface CarouselDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Accessible label for the dot-indicator group */
  'aria-label'?: string;
}

// ----------------------------------------------------------------
// Context
// ----------------------------------------------------------------

type CarouselContextValue = {
  viewportRef: ReturnType<typeof useEmblaCarousel>[0];
  api?: CarouselApi;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  snapCount: number;
  slideCount: number;
  setSlideCount: React.Dispatch<React.SetStateAction<number>>;
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

function useCarouselContext() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('Carousel compound components must be used inside <Carousel>.');
  }

  return context;
}

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------

function isCarouselItemElement(
  child: React.ReactNode,
): child is React.ReactElement<CarouselItemProps & CarouselItemPrivateProps, typeof CarouselItem> {
  return React.isValidElement(child) && child.type === CarouselItem;
}

type WithChildren = { children?: React.ReactNode };

function hasChildren(props: unknown): props is WithChildren {
  return typeof props === 'object' && props !== null && 'children' in props;
}

function countCarouselItems(children: React.ReactNode): number {
  return React.Children.toArray(children).reduce<number>((count, child) => {
    if (isCarouselItemElement(child)) return count + 1;
    if (React.isValidElement(child) && hasChildren(child.props)) {
      return count + countCarouselItems(child.props.children);
    }
    return count;
  }, 0);
}

function mapCarouselItems(
  children: React.ReactNode,
  itemCount: number,
  indexRef: { current: number },
): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (isCarouselItemElement(child)) {
      const cloned = React.cloneElement(child, {
        slideIndex: indexRef.current,
        slideCount: itemCount,
      });
      indexRef.current += 1;
      return cloned;
    }
    if (React.isValidElement(child) && hasChildren(child.props)) {
      return React.cloneElement(
        child as React.ReactElement<WithChildren>,
        undefined,
        mapCarouselItems(child.props.children, itemCount, indexRef),
      );
    }
    return child;
  });
}

type CarouselArrowDirection = 'left' | 'right';

interface CarouselArrowIconProps extends React.SVGProps<SVGSVGElement> {
  direction: CarouselArrowDirection;
}

type CarouselCSSProperties = React.CSSProperties & {
  '--carousel-slides-per-view'?: string;
};

const arrowRotations: Record<CarouselArrowDirection, number> = {
  left: 90,
  right: -90,
};

function createSmartSlideAlign(slideCount: number): CarouselAlignResolver {
  return (viewSize, snapSize, index) => {
    // All slides fit in the viewport — collapse to a single snap point so
    // Embla never reports canScrollNext=true when nothing is hidden.
    if (snapSize * slideCount <= viewSize) {
      return 0;
    }

    if (index === 0) {
      return 0;
    }

    if (index === slideCount - 1) {
      return viewSize - snapSize;
    }

    return (viewSize - snapSize) / 2;
  };
}

function normalizeSlidesPerView(slidesPerView: number | undefined): number {
  if (typeof slidesPerView !== 'number' || !Number.isFinite(slidesPerView) || slidesPerView <= 0) {
    return 1;
  }

  return slidesPerView;
}

function normalizeAutoplayInterval(interval: number | undefined): number {
  if (typeof interval !== 'number' || !Number.isFinite(interval) || interval < 250) {
    return 250;
  }

  return interval;
}

function CarouselArrowIcon({ direction, ...props }: CarouselArrowIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 6L8 10L12 6"
        transform={`rotate(${arrowRotations[direction]} 8 8)`}
      />
    </svg>
  );
}

// ----------------------------------------------------------------
// CarouselRoot (exported as Carousel)
// ----------------------------------------------------------------

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      className,
      children,
      loop = false,
      slideAlign = 'center',
      slidesPerView = 1,
      setApi,
      autoplay = false,
      autoplayInterval = 3000,
      pauseOnHover = true,
      onKeyDownCapture,
      onMouseEnter,
      onMouseLeave,
      onFocusCapture,
      onBlurCapture,
      role,
      style,
      tabIndex,
      ['aria-label']: ariaLabel,
      ['aria-roledescription']: ariaRoleDescription,
      ...props
    },
    ref,
  ) => {
    const [slideCount, setSlideCount] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    const normalizedSlidesPerView = normalizeSlidesPerView(slidesPerView);
    const emblaAlign = React.useMemo<EmblaSlideAlign | CarouselAlignResolver>(() => {
      if (slideAlign !== 'smart') {
        return slideAlign;
      }

      if (slideCount <= 1) {
        return 'start';
      }

      return createSmartSlideAlign(slideCount);
    }, [slideAlign, slideCount]);
    const emblaContainScroll = React.useMemo<EmblaContainScroll>(() => {
      if (slideAlign === 'center') {
        return false;
      }

      // trimSnaps causes ScrollContain.measureBounded() to force-clamp the
      // last snap to scrollBounds.max (e.g. -gap px), creating a phantom
      // scroll range even when all slides fit. Disable containScroll for
      // smart-align when slideCount fits within the visible window so Embla
      // never sees a non-zero scroll range to navigate.
      if (slideAlign === 'smart' && slideCount > 0 && slideCount <= normalizedSlidesPerView) {
        return false;
      }

      return 'trimSnaps';
    }, [slideAlign, slideCount, normalizedSlidesPerView]);
    const emblaOptions = React.useMemo(
      () => ({
        axis: 'x' as const,
        loop,
        align: emblaAlign,
        containScroll: emblaContainScroll,
      }),
      [loop, emblaAlign, emblaContainScroll],
    );
    const [viewportRef, api] = useEmblaCarousel(emblaOptions);
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [snapCount, setSnapCount] = React.useState(0);
    const carouselStyle = React.useMemo<CarouselCSSProperties>(() => {
      const nextStyle: CarouselCSSProperties = { ...style };
      nextStyle['--carousel-slides-per-view'] = `${normalizedSlidesPerView}`;
      return nextStyle;
    }, [normalizedSlidesPerView, style]);

    const syncSelectionState = React.useCallback(() => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      setSelectedIndex(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    }, [api]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      api.reInit();
      syncSelectionState();
    }, [api, normalizedSlidesPerView, syncSelectionState]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      syncSelectionState();
      setApi?.(api);

      api.on('init', syncSelectionState);
      api.on('select', syncSelectionState);
      api.on('reInit', syncSelectionState);

      return () => {
        api.off('init', syncSelectionState);
        api.off('select', syncSelectionState);
        api.off('reInit', syncSelectionState);
      };
    }, [api, setApi, syncSelectionState]);

    React.useEffect(() => {
      if (!autoplay || !api) {
        return;
      }

      if (
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }

      if (isPaused) {
        return;
      }

      const delay = normalizeAutoplayInterval(autoplayInterval);
      let id: ReturnType<typeof setInterval> | undefined;

      const stop = () => {
        if (id !== undefined) {
          clearInterval(id);
          id = undefined;
        }
      };

      const start = () => {
        if (id !== undefined) {
          return;
        }

        id = setInterval(() => {
          if (!loop && !api.canScrollNext()) {
            stop();
            return;
          }

          api.scrollNext();
        }, delay);
      };

      const sync = () => {
        if (loop || api.canScrollNext()) {
          start();
        } else {
          stop();
        }
      };

      sync();
      api.on('select', sync);
      api.on('reInit', sync);

      return () => {
        stop();
        api.off('select', sync);
        api.off('reInit', sync);
      };
    }, [autoplay, api, loop, autoplayInterval, isPaused]);

    const handleKeyDownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDownCapture?.(event);

      if (event.defaultPrevented || event.currentTarget !== event.target) {
        return;
      }

      const previousKey = 'ArrowLeft';
      const nextKey = 'ArrowRight';

      if (event.key === previousKey) {
        event.preventDefault();
        api?.scrollPrev();
      }

      if (event.key === nextKey) {
        event.preventDefault();
        api?.scrollNext();
      }
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
      onMouseEnter?.(event);
      if (pauseOnHover) {
        setIsPaused(true);
      }
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
      onMouseLeave?.(event);
      if (pauseOnHover) {
        setIsPaused(false);
      }
    };

    const handleFocusCapture = (event: React.FocusEvent<HTMLDivElement>) => {
      onFocusCapture?.(event);
      if (pauseOnHover) {
        setIsPaused(true);
      }
    };

    const handleBlurCapture = (event: React.FocusEvent<HTMLDivElement>) => {
      onBlurCapture?.(event);
      if (!pauseOnHover) {
        return;
      }

      const nextFocused = event.relatedTarget;

      if (nextFocused instanceof Node && event.currentTarget.contains(nextFocused)) {
        return;
      }

      setIsPaused(false);
    };

    const contextValue = React.useMemo(
      () => ({
        viewportRef,
        api,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        snapCount,
        slideCount,
        setSlideCount,
        scrollPrev: () => api?.scrollPrev(),
        scrollNext: () => api?.scrollNext(),
        scrollTo: (index: number) => api?.scrollTo(index),
      }),
      [
        viewportRef,
        api,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        snapCount,
        slideCount,
      ],
    );

    const cls = [
      styles.carousel,
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const announcedCount = slideCount || api?.scrollSnapList().length || 0;

    return (
      <CarouselContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cls}
          style={carouselStyle}
          data-orientation="horizontal"
          {...props}
          role={role ?? 'region'}
          tabIndex={tabIndex ?? 0}
          aria-label={ariaLabel ?? 'Carousel'}
          aria-roledescription={ariaRoleDescription ?? 'carousel'}
          onKeyDownCapture={handleKeyDownCapture}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocusCapture={handleFocusCapture}
          onBlurCapture={handleBlurCapture}
        >
          {announcedCount > 0 ? (
            <span className={styles.srOnly} aria-live="polite" aria-atomic="true">
              Slide {selectedIndex + 1} of {announcedCount}
            </span>
          ) : null}
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);

Carousel.displayName = 'Carousel';

// ----------------------------------------------------------------
// CarouselItem
// ----------------------------------------------------------------

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  CarouselItemProps & CarouselItemPrivateProps
>(({ className, slideLabel, slideIndex, slideCount, ...props }, ref) => {
  const { selectedIndex } = useCarouselContext();

  const cls = [
    styles.item,
    styles['item-horizontal'],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const computedLabel = slideLabel ?? (
    slideIndex !== undefined && slideCount !== undefined
      ? `Slide ${slideIndex + 1} of ${slideCount}`
      : undefined
  );

  return (
    <div
      ref={ref}
      className={cls}
      role="group"
      aria-roledescription="slide"
      aria-label={computedLabel}
      data-active={slideIndex === selectedIndex ? 'true' : undefined}
      {...props}
    />
  );
});

CarouselItem.displayName = 'CarouselItem';

// ----------------------------------------------------------------
// CarouselContent
// ----------------------------------------------------------------

export const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, children, ...props }, ref) => {
    const { viewportRef, setSlideCount } = useCarouselContext();
    const itemCount = React.useMemo(() => countCarouselItems(children), [children]);

    React.useEffect(() => {
      setSlideCount(itemCount);
    }, [itemCount, setSlideCount]);

    const mappedChildren = React.useMemo(
      () => mapCarouselItems(children, itemCount, { current: 0 }),
      [children, itemCount],
    );

    const cls = [
      styles.content,
      styles['content-horizontal'],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const viewportClassName = [
      styles.viewport,
      styles['viewport-horizontal'],
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={viewportRef} className={viewportClassName}>
        <div ref={ref} className={cls} {...props}>
          {mappedChildren}
        </div>
      </div>
    );
  },
);

CarouselContent.displayName = 'CarouselContent';

// ----------------------------------------------------------------
// CarouselPrevious
// ----------------------------------------------------------------

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  CarouselPreviousProps
>(
  (
    {
      className,
      children,
      disabled,
      onClick,
      type,
      ['aria-label']: ariaLabel,
      ...props
    },
    ref,
  ) => {
    const { canScrollPrev, scrollPrev } = useCarouselContext();
    const direction = 'left';
    const isDisabled = disabled || !canScrollPrev;
    const cls = [styles.control, className ?? ''].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        type={type ?? 'button'}
        className={cls}
        disabled={isDisabled}
        aria-label={ariaLabel ?? 'Previous slide'}
        onClick={(event) => {
          onClick?.(event);

          if (!event.defaultPrevented) {
            scrollPrev();
          }
        }}
        {...props}
      >
        {children ?? <CarouselArrowIcon direction={direction} width={18} height={18} />}
      </button>
    );
  },
);

CarouselPrevious.displayName = 'CarouselPrevious';

// ----------------------------------------------------------------
// CarouselNext
// ----------------------------------------------------------------

export const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
  (
    {
      className,
      children,
      disabled,
      onClick,
      type,
      ['aria-label']: ariaLabel,
      ...props
    },
    ref,
  ) => {
    const { canScrollNext, scrollNext } = useCarouselContext();
    const direction = 'right';
    const isDisabled = disabled || !canScrollNext;
    const cls = [styles.control, className ?? ''].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        type={type ?? 'button'}
        className={cls}
        disabled={isDisabled}
        aria-label={ariaLabel ?? 'Next slide'}
        onClick={(event) => {
          onClick?.(event);

          if (!event.defaultPrevented) {
            scrollNext();
          }
        }}
        {...props}
      >
        {children ?? <CarouselArrowIcon direction={direction} width={18} height={18} />}
      </button>
    );
  },
);

CarouselNext.displayName = 'CarouselNext';

// ----------------------------------------------------------------
// CarouselDots
// ----------------------------------------------------------------

export const CarouselDots = React.forwardRef<HTMLDivElement, CarouselDotsProps>(
  ({ className, 'aria-label': ariaLabel, ...props }, ref) => {
    const { selectedIndex, snapCount, scrollTo } = useCarouselContext();

    if (snapCount === 0) {
      return null;
    }

    const cls = [styles.dots, className ?? ''].filter(Boolean).join(' ');

    return (
      <div
        ref={ref}
        className={cls}
        {...props}
        role="group"
        aria-label={ariaLabel ?? 'Slide indicators'}
      >
        {Array.from({ length: snapCount }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === selectedIndex ? 'true' : undefined}
            className={[
              styles.dot,
              i === selectedIndex ? styles['dot-active'] : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    );
  },
);

CarouselDots.displayName = 'CarouselDots';

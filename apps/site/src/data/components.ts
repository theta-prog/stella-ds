export interface PropDef {
  name: string
  type: string
  default: string
  description: string
}

export interface Example {
  title: string
  code: string
}

export interface ComponentDoc {
  slug: string
  name: string
  description: string
  category: 'inputs' | 'display' | 'feedback' | 'layout' | 'navigation' | 'overlay' | 'typography'
  imports: string[]
  props: PropDef[]
  examples: Example[]
}

export const components: ComponentDoc[] = [
  {
    slug: 'alert',
    name: 'Alert',
    description: 'Inline feedback banner for status messages. Uses role="alert" for errors/warnings and role="status" for info/success.',
    category: 'feedback',
    imports: ['Alert', 'AlertTitle', 'AlertDescription'],
    props: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'error'", default: "'info'", description: 'Visual style and semantic meaning' },
      { name: 'onClose', type: '() => void', default: 'undefined', description: 'Renders an × button when provided' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `<Alert variant="success" onClose={() => {}}>
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>`,
      },
    ],
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    description: 'Round image display with automatic initials fallback when image is missing or fails to load.',
    category: 'display',
    imports: ['Avatar'],
    props: [
      { name: 'alt', type: 'string', default: '—', description: 'Required. Alt text and fallback initial source' },
      { name: 'src', type: 'string', default: 'undefined', description: 'Image URL' },
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Avatar diameter (24/32/40/48/64px)' },
      { name: 'fallback', type: 'ReactNode', default: 'first char of alt', description: 'Custom fallback content' },
    ],
    examples: [{ title: 'Basic', code: `<Avatar src="/photo.jpg" alt="Jane Doe" size="lg" />` }],
  },
  {
    slug: 'background',
    name: 'Background',
    description: 'Animated visual backgrounds: starfield, galaxy with nebula glow, milky way wave ribbons, mesh gradient, or solid color.',
    category: 'layout',
    imports: ['Background'],
    props: [
      { name: 'variant', type: "'stars' | 'galaxy' | 'milkyway' | 'gradient' | 'solid'", default: "'stars'", description: 'Visual style' },
      { name: 'color', type: "'cosmos' | 'nebula' | 'aurora' | 'mixed'", default: "'mixed'", description: 'Color accent palette' },
      { name: 'theme', type: "'dark' | 'light'", default: "'dark'", description: 'Base theme' },
      { name: 'twinkle', type: 'boolean', default: 'true', description: 'Star twinkling animation' },
      { name: 'ribbons', type: 'number', default: '5', description: 'Number of wave ribbons (milkyway variant)' },
      { name: 'tokenColor', type: 'string', default: 'undefined', description: "Design-token color override (e.g. 'cosmos-500')" },
      { name: 'showGradient', type: 'boolean', default: 'true', description: 'Show blob overlay on gradient variant' },
    ],
    examples: [{ title: 'Galaxy', code: `<Background variant="galaxy" color="cosmos" theme="dark" style={{ height: 200 }}>\n  <p>Content over galaxy</p>\n</Background>` }],
  },
  {
    slug: 'badge',
    name: 'Badge',
    description: 'Inline label for status, counts, or categories.',
    category: 'display',
    imports: ['Badge'],
    props: [
      { name: 'variant', type: "'solid' | 'outline' | 'subtle'", default: "'solid'", description: 'Visual fill style' },
      { name: 'color', type: "'default' | 'primary' | 'success' | 'warning' | 'error'", default: "'default'", description: 'Color semantic' },
      { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'Size preset' },
    ],
    examples: [{ title: 'Basic', code: `<Badge variant="subtle" color="success">Published</Badge>` }],
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    description: 'Accessible breadcrumb navigation with nav[aria-label="breadcrumb"] and aria-current="page" support.',
    category: 'navigation',
    imports: ['Breadcrumb', 'BreadcrumbList', 'BreadcrumbItem', 'BreadcrumbLink', 'BreadcrumbSeparator'],
    props: [
      { name: 'asChild (BreadcrumbLink)', type: 'boolean', default: 'false', description: 'Render as child element (router Link, etc.)' },
      { name: 'isCurrentPage (BreadcrumbLink)', type: 'boolean', default: 'false', description: 'Marks current page — renders as span with aria-current' },
    ],
    examples: [{ title: 'Basic', code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink isCurrentPage>Docs</BreadcrumbLink></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>` }],
  },
  {
    slug: 'button',
    name: 'Button',
    description: 'Interactive button with four visual variants, three sizes, loading state, and Radix asChild support.',
    category: 'inputs',
    imports: ['Button'],
    props: [
      { name: 'variant', type: "'solid' | 'outline' | 'ghost' | 'glow'", default: "'solid'", description: 'Visual style' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size preset' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows spinner and disables interaction' },
      { name: 'asChild', type: 'boolean', default: 'false', description: 'Render child as root (Radix Slot pattern)' },
    ],
    examples: [
      { title: 'Variants', code: `<Button variant="solid">Solid</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="glow">Glow</Button>` },
      { title: 'Loading', code: `<Button loading>Saving...</Button>` },
    ],
  },
  {
    slug: 'card',
    name: 'Card',
    description: 'Content container with optional hover lift effect. Compound component with header, content, and footer slots.',
    category: 'layout',
    imports: ['Card', 'CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter'],
    props: [
      { name: 'hoverable', type: 'boolean', default: 'false', description: 'Adds hover lift (box-shadow + translateY)' },
    ],
    examples: [{ title: 'Full', code: `<Card hoverable>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>Main content area.</CardContent>
  <CardFooter><Button size="sm">Action</Button></CardFooter>
</Card>` }],
  },
  {
    slug: 'carousel',
    name: 'Carousel',
    description: 'Embla-powered content carousel with accessible slide announcements, keyboard support, compound controls, and default edge bleed tuned for clean multi-slide layouts.',
    category: 'navigation',
    imports: ['Carousel', 'CarouselContent', 'CarouselItem', 'CarouselPrevious', 'CarouselNext'],
    props: [
      { name: 'loop', type: 'boolean', default: 'false', description: 'Wrap from the last slide back to the first' },
      { name: 'slideAlign', type: "'smart' | 'start' | 'center' | 'end'", default: "'center'", description: 'Embla snap alignment' },
      { name: 'slidesPerView', type: 'number', default: '1', description: 'How many slides should fit in one viewport. Fractional values create peeking layouts.' },
      { name: 'setApi', type: '(api: CarouselApi) => void', default: 'undefined', description: 'Expose the underlying Embla API for advanced control' },
    ],
    examples: [{ title: 'Two-up cards', code: `<Carousel aria-label="Featured projects" slideAlign="smart" slidesPerView={2}>
  <CarouselContent>
    <CarouselItem>
      <article style={{ borderRadius: '1rem', border: '1px solid var(--stella-color-void-muted)', boxShadow: 'var(--stella-shadow-md)', padding: '1.25rem' }}>
        Project one
      </article>
    </CarouselItem>
    <CarouselItem>
      <article style={{ borderRadius: '1rem', border: '1px solid var(--stella-color-void-muted)', boxShadow: 'var(--stella-shadow-md)', padding: '1.25rem' }}>
        Project two
      </article>
    </CarouselItem>
    <CarouselItem>
      <article style={{ borderRadius: '1rem', border: '1px solid var(--stella-color-void-muted)', boxShadow: 'var(--stella-shadow-md)', padding: '1.25rem' }}>
        Project three
      </article>
    </CarouselItem>
  </CarouselContent>
  <div style={{ display: 'flex', gap: '0.75rem' }}>
    <CarouselPrevious />
    <CarouselNext />
  </div>
</Carousel>` }],
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    description: 'Accessible checkbox built on Radix UI with optional label and error state.',
    category: 'inputs',
    imports: ['Checkbox'],
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size preset' },
      { name: 'label', type: 'ReactNode', default: 'undefined', description: 'Label rendered beside the checkbox' },
      { name: 'error', type: 'boolean', default: 'false', description: 'Error state styling' },
    ],
    examples: [{ title: 'With label', code: `<Checkbox label="Accept terms and conditions" defaultChecked />\n<Checkbox label="Required field" error />` }],
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    description: 'Accessible modal dialog with animated overlay, built on Radix UI. Focus trapped, scroll locked, and keyboard-navigable.',
    category: 'overlay',
    imports: ['Dialog', 'DialogTrigger', 'DialogContent', 'DialogHeader', 'DialogFooter', 'DialogTitle', 'DialogDescription', 'DialogClose'],
    props: [
      { name: 'showClose (DialogContent)', type: 'boolean', default: 'true', description: 'Show default × close button' },
    ],
    examples: [{ title: 'Basic', code: `<Dialog>
  <DialogTrigger asChild><Button>Open Dialog</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>` }],
  },
  {
    slug: 'footer',
    name: 'Footer',
    description: 'Site footer with grid content layout. Compound component with content area, divider, and bottom bar.',
    category: 'layout',
    imports: ['Footer', 'FooterContent', 'FooterDivider', 'FooterBottom'],
    props: [],
    examples: [{ title: 'Basic', code: `<Footer>
  <FooterContent>Links and navigation</FooterContent>
  <FooterDivider />
  <FooterBottom>© 2024 Stella UI. All rights reserved.</FooterBottom>
</Footer>` }],
  },
  {
    slug: 'header',
    name: 'Header',
    description: 'Flexible site header with sticky positioning, backdrop blur, and responsive mobile hamburger menu.',
    category: 'layout',
    imports: ['Header', 'HeaderBrand', 'HeaderNav', 'HeaderActions'],
    props: [
      { name: 'sticky', type: 'boolean', default: 'false', description: 'Sticks to viewport top' },
      { name: 'blur', type: 'boolean', default: 'true', description: 'Applies backdrop blur when sticky' },
      { name: 'mobileNav', type: 'ReactNode', default: 'undefined', description: 'Mobile hamburger menu content' },
    ],
    examples: [{ title: 'Sticky', code: `<Header sticky>
  <HeaderBrand>Stella UI</HeaderBrand>
  <HeaderNav>
    <a href="/">Home</a>
    <a href="/docs">Docs</a>
  </HeaderNav>
  <HeaderActions>
    <Button size="sm">Get Started</Button>
  </HeaderActions>
</Header>` }],
  },
  {
    slug: 'heading',
    name: 'Heading',
    description: 'Semantic h1–h6 element with configurable visual size, weight, and alignment. Decouples visual appearance from semantic level.',
    category: 'typography',
    imports: ['Heading'],
    props: [
      { name: 'level', type: '1 | 2 | 3 | 4 | 5 | 6', default: '2', description: 'Semantic heading level (determines rendered element)' },
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'", default: 'maps from level', description: 'Visual size override' },
      { name: 'weight', type: "'normal' | 'medium' | 'semibold' | 'bold'", default: "'bold'", description: 'Font weight' },
      { name: 'align', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Text alignment' },
      { name: 'asChild', type: 'boolean', default: 'false', description: 'Radix Slot pattern' },
    ],
    examples: [{ title: 'Basic', code: `<Heading level={1} size="3xl">Page Title</Heading>\n<Heading level={2} align="center" weight="semibold">Section Header</Heading>` }],
  },
  {
    slug: 'input',
    name: 'Input',
    description: 'Single-line text input with size presets and accessible error state with inline message.',
    category: 'inputs',
    imports: ['Input'],
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size preset' },
      { name: 'error', type: 'boolean | string', default: 'false', description: 'Pass true for error styling, or a string to show an error message' },
    ],
    examples: [{ title: 'With error', code: `<Input placeholder="Enter email" />\n<Input error="Email is required" value="" onChange={() => {}} />` }],
  },
  {
    slug: 'page-grid',
    name: 'PageGrid',
    description: 'CSS grid layout for full pages with single, sidebar-left, sidebar-right, and three-column presets.',
    category: 'layout',
    imports: ['PageGrid'],
    props: [
      { name: 'layout', type: "'single' | 'sidebar-left' | 'sidebar-right' | 'three-col'", default: "'single'", description: 'Grid layout variant' },
      { name: 'gap', type: "'4' | '6' | '8' | '12'", default: "'8'", description: 'Column gap' },
      { name: 'fullBleed', type: 'boolean', default: 'false', description: 'Full-width or max-width contained' },
    ],
    examples: [{ title: 'Sidebar', code: `<PageGrid layout="sidebar-left" gap="8">
  <aside>Sidebar</aside>
  <main>Main content</main>
</PageGrid>` }],
  },
  {
    slug: 'radio',
    name: 'Radio',
    description: 'Radio button group built on Radix UI RadioGroup. Size and error state propagate to all items via context.',
    category: 'inputs',
    imports: ['RadioGroup', 'RadioItem'],
    props: [
      { name: 'size (RadioGroup)', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size preset for all items' },
      { name: 'error (RadioGroup)', type: 'boolean', default: 'false', description: 'Error state for all items' },
      { name: 'orientation (RadioGroup)', type: "'horizontal' | 'vertical'", default: "'vertical'", description: 'Layout direction' },
      { name: 'value (RadioItem)', type: 'string', default: '—', description: 'Required. Value this item represents' },
      { name: 'label (RadioItem)', type: 'ReactNode', default: 'undefined', description: 'Optional label' },
    ],
    examples: [{ title: 'Basic', code: `<RadioGroup defaultValue="b">
  <RadioItem value="a" label="Option A" />
  <RadioItem value="b" label="Option B" />
  <RadioItem value="c" label="Option C" disabled />
</RadioGroup>` }],
  },
  {
    slug: 'section',
    name: 'Section',
    description: 'Semantic <section> wrapper with max-width presets and vertical padding control. Centers content within a max-width container.',
    category: 'layout',
    imports: ['Section'],
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg' | 'full'", default: "'lg'", description: 'Max-width preset' },
      { name: 'padding', type: "'sm' | 'md' | 'lg' | 'none'", default: "'md'", description: 'Vertical padding' },
      { name: 'asChild', type: 'boolean', default: 'false', description: 'Radix Slot pattern' },
    ],
    examples: [{ title: 'Basic', code: `<Section size="lg" padding="lg">
  <Heading level={2}>Features</Heading>
  <Text>Explore what Stella UI offers.</Text>
</Section>` }],
  },
  {
    slug: 'select',
    name: 'Select',
    description: 'Accessible dropdown select built on Radix UI. Keyboard navigable with search, grouping, and error state support.',
    category: 'inputs',
    imports: ['Select', 'SelectTrigger', 'SelectContent', 'SelectItem', 'SelectGroup', 'SelectLabel', 'SelectSeparator'],
    props: [
      { name: 'size (SelectTrigger)', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size preset' },
      { name: 'error (SelectTrigger)', type: 'boolean | string', default: 'false', description: 'Error state or message' },
      { name: 'placeholder (SelectTrigger)', type: 'string', default: 'undefined', description: 'Placeholder text' },
    ],
    examples: [{ title: 'Basic', code: `<Select>
  <SelectTrigger placeholder="Pick a fruit" />
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
</Select>` }],
  },
  {
    slug: 'separator',
    name: 'Separator',
    description: 'Visual divider between content sections. Horizontal or vertical, decorative or semantic.',
    category: 'layout',
    imports: ['Separator'],
    props: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Divider direction' },
      { name: 'decorative', type: 'boolean', default: 'true', description: 'Hides from screen readers (role="none") when true' },
    ],
    examples: [{ title: 'Basic', code: `<Separator />\n<Separator orientation="vertical" />` }],
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    description: 'Loading placeholder with pulse animation. Supports text (single or multi-line), circular, and rectangular shapes.',
    category: 'feedback',
    imports: ['Skeleton'],
    props: [
      { name: 'variant', type: "'text' | 'circular' | 'rectangular'", default: "'text'", description: 'Shape of placeholder' },
      { name: 'width', type: 'string | number', default: 'undefined', description: 'CSS width' },
      { name: 'height', type: 'string | number', default: 'undefined', description: 'CSS height' },
      { name: 'lines', type: 'number', default: '1', description: 'Number of text lines (text variant only)' },
      { name: 'animate', type: 'boolean', default: 'true', description: 'Pulse animation' },
    ],
    examples: [{ title: 'Multi-line text', code: `<Skeleton variant="text" lines={3} />\n<Skeleton variant="circular" width={40} height={40} />\n<Skeleton variant="rectangular" width="100%" height={120} />` }],
  },
  {
    slug: 'stack',
    name: 'Stack',
    description: 'Flexbox layout primitive for composing vertical or horizontal stacks with spacing token gaps.',
    category: 'layout',
    imports: ['Stack'],
    props: [
      { name: 'direction', type: "'vertical' | 'horizontal'", default: "'vertical'", description: 'Flex direction' },
      { name: 'gap', type: "'1' | '2' | '3' | '4' | '6' | '8' | '12' | '16'", default: "'4'", description: 'Gap using spacing tokens' },
      { name: 'align', type: "'start' | 'center' | 'end' | 'stretch'", default: "'stretch'", description: 'align-items' },
      { name: 'justify', type: "'start' | 'center' | 'end' | 'between' | 'around'", default: "'start'", description: 'justify-content' },
      { name: 'wrap', type: 'boolean', default: 'false', description: 'Wrap flex items' },
      { name: 'asChild', type: 'boolean', default: 'false', description: 'Radix Slot pattern' },
    ],
    examples: [{ title: 'Horizontal', code: `<Stack direction="horizontal" gap="4" align="center">
  <Avatar alt="U" size="sm" />
  <Text weight="medium">Username</Text>
</Stack>` }],
  },
  {
    slug: 'switch',
    name: 'Switch',
    description: 'Toggle switch built on Radix UI with optional label and error state.',
    category: 'inputs',
    imports: ['Switch'],
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size preset' },
      { name: 'label', type: 'ReactNode', default: 'undefined', description: 'Label beside the switch' },
      { name: 'error', type: 'boolean', default: 'false', description: 'Error state' },
    ],
    examples: [{ title: 'With label', code: `<Switch label="Enable notifications" defaultChecked />\n<Switch label="Dark mode" size="sm" />` }],
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    description: 'Tabbed content panels built on Radix UI. Keyboard navigable with line (underline) or solid (pill) visual variants.',
    category: 'navigation',
    imports: ['Tabs', 'TabsList', 'TabsTrigger', 'TabsContent'],
    props: [
      { name: 'variant', type: "'line' | 'solid'", default: "'line'", description: 'Visual style — underline or pill/box' },
    ],
    examples: [{ title: 'Basic', code: `<Tabs defaultValue="overview" variant="line">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>` }],
  },
  {
    slug: 'text',
    name: 'Text',
    description: 'Polymorphic body text primitive. Renders as p, span, div, or label with size, weight, color, and truncation control.',
    category: 'typography',
    imports: ['Text'],
    props: [
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Font size preset' },
      { name: 'weight', type: "'normal' | 'medium' | 'semibold' | 'bold'", default: "'normal'", description: 'Font weight' },
      { name: 'color', type: "'primary' | 'secondary' | 'disabled'", default: "'primary'", description: 'Text color via starlight tokens' },
      { name: 'align', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Text alignment' },
      { name: 'as', type: "'p' | 'span' | 'div' | 'label'", default: "'p'", description: 'HTML element to render' },
      { name: 'asChild', type: 'boolean', default: 'false', description: 'Radix Slot pattern' },
      { name: 'truncate', type: 'boolean', default: 'false', description: 'Truncate overflow with ellipsis' },
    ],
    examples: [{ title: 'Basic', code: `<Text size="lg" weight="medium">Body copy</Text>\n<Text as="span" color="secondary" size="sm">Caption text</Text>\n<Text truncate>Long text that gets truncated...</Text>` }],
  },
  {
    slug: 'toast',
    name: 'Toast',
    description: 'Ephemeral overlay notification built on Radix UI. Wrap app with ToastProvider + ToastViewport once, then render Toast anywhere.',
    category: 'feedback',
    imports: ['ToastProvider', 'ToastViewport', 'Toast', 'ToastTitle', 'ToastDescription', 'ToastClose', 'ToastAction'],
    props: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'error'", default: "'info'", description: 'Visual style and semantic meaning' },
      { name: 'label (ToastClose)', type: 'string', default: "'Close notification'", description: 'aria-label for close button' },
    ],
    examples: [{ title: 'Setup + usage', code: `// In layout.tsx — wrap once:
<ToastProvider>
  {children}
  <ToastViewport />
</ToastProvider>

// Then render anywhere:
<Toast open={open} onOpenChange={setOpen} variant="success">
  <ToastTitle>Saved!</ToastTitle>
  <ToastDescription>Your file has been saved.</ToastDescription>
  <ToastClose />
</Toast>` }],
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    description: 'Hover tooltip built on Radix UI. Wrap app with TooltipProvider once.',
    category: 'overlay',
    imports: ['TooltipProvider', 'Tooltip', 'TooltipTrigger', 'TooltipContent'],
    props: [
      { name: 'side (TooltipContent)', type: "'top' | 'right' | 'bottom' | 'left'", default: "'top'", description: 'Preferred tooltip side' },
      { name: 'sideOffset (TooltipContent)', type: 'number', default: '6', description: 'Distance from trigger in pixels' },
    ],
    examples: [{ title: 'Basic', code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent side="top">Helpful hint text</TooltipContent>
  </Tooltip>
</TooltipProvider>` }],
  },
]

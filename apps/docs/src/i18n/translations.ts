import type { Locale } from './locales';

// ---------------------------------------------------------------------------
// Component translation interfaces
// ---------------------------------------------------------------------------

export interface ButtonTranslations {
  componentDescription: string;
  story_default: string;
  story_solid: string;
  story_outline: string;
  story_ghost: string;
  story_glow: string;
  story_small: string;
  story_large: string;
  story_loading: string;
  story_disabled: string;
  story_allVariants: string;
  story_asLink: string;
  desc_glow: string;
  desc_loading: string;
  desc_asLink: string;
  desc_allVariants: string;
  ctrl_variant: string;
  ctrl_size: string;
  ctrl_loading: string;
  ctrl_disabled: string;
  ctrl_asChild: string;
  label_default: string;
  label_link: string;
}

export interface InputTranslations {
  componentDescription: string;
  story_default: string;
  story_sizes: string;
  story_error: string;
  story_errorMessage: string;
  story_disabled: string;
  story_password: string;
  story_allStates: string;
  label_placeholder: string;
  label_errorMsg: string;
}

export interface CheckboxTranslations {
  componentDescription: string;
  story_default: string;
  story_withLabel: string;
  story_sizes: string;
  story_error: string;
  story_disabled: string;
  story_controlled: string;
  label_default: string;
}

export interface RadioTranslations {
  componentDescription: string;
  story_default: string;
  story_horizontal: string;
  story_sizes: string;
  story_error: string;
  story_disabled: string;
  story_controlled: string;
}

export interface SelectTranslations {
  componentDescription: string;
  story_default: string;
  story_sizes: string;
  story_error: string;
  story_disabled: string;
  story_withGroups: string;
  story_controlled: string;
  label_placeholder: string;
  label_errorMsg: string;
}

export interface AlertTranslations {
  componentDescription: string;
  story_info: string;
  story_success: string;
  story_warning: string;
  story_error: string;
  story_dismissible: string;
  story_titleOnly: string;
  story_allVariants: string;
  title_info: string;
  desc_info: string;
  title_success: string;
  desc_success: string;
  title_warning: string;
  desc_warning: string;
  title_error: string;
  desc_error: string;
  title_dismissible: string;
  desc_dismissible: string;
  label_dismissed: string;
  label_readOnly: string;
}

export interface ToastTranslations {
  componentDescription: string;
  story_info: string;
  story_success: string;
  story_warning: string;
  story_error: string;
  story_withAction: string;
  story_titleOnly: string;
  story_allVariants: string;
  title_info: string;
  desc_info: string;
  title_success: string;
  desc_success: string;
  title_warning: string;
  desc_warning: string;
  title_error: string;
  desc_error: string;
  title_action: string;
  desc_action: string;
  title_titleOnly: string;
  label_show: string;
  label_undo: string;
}

export interface SwitchTranslations {
  componentDescription: string;
  story_default: string;
  story_sizes: string;
  story_withLabel: string;
  story_error: string;
  story_disabled: string;
  story_controlled: string;
  label_toggle: string;
  label_notifications: string;
  label_terms: string;
  label_disabledOff: string;
  label_disabledOn: string;
  label_darkMode: string;
}

export interface BadgeTranslations {
  componentDescription: string;
  story_default: string;
  story_variants: string;
  story_colors: string;
  story_sizes: string;
  story_withIcon: string;
  label_badge: string;
  label_solid: string;
  label_subtle: string;
  label_outline: string;
  label_small: string;
  label_medium: string;
  label_online: string;
  label_pending: string;
  label_offline: string;
  label_active: string;
  label_inactive: string;
}

export interface CardTranslations {
  componentDescription: string;
  story_default: string;
  story_withFooter: string;
  story_minimal: string;
  label_title: string;
  label_description: string;
  label_body: string;
  label_action: string;
}

export interface DialogTranslations {
  componentDescription: string;
  story_basic: string;
  story_withDescription: string;
  story_withFooter: string;
  story_controlled: string;
  label_openDialog: string;
  title_basic: string;
  desc_basic: string;
  label_openWithDesc: string;
  title_settings: string;
  desc_settings: string;
  body_settings: string;
  label_delete: string;
  title_confirmDelete: string;
  desc_confirmDelete: string;
  label_cancel: string;
  label_deleteAction: string;
  label_openControlled: string;
  title_controlled: string;
  desc_controlled: string;
  label_confirm: string;
}

export interface TooltipTranslations {
  componentDescription: string;
  story_default: string;
  story_sides: string;
  story_longContent: string;
  story_onIcon: string;
  story_controlled: string;
  label_hoverMe: string;
  label_tooltip: string;
  label_top: string;
  label_left: string;
  label_right: string;
  label_bottom: string;
  desc_top: string;
  desc_left: string;
  desc_right: string;
  desc_bottom: string;
  label_moreInfo: string;
  desc_long: string;
  label_settings: string;
  label_clickToggle: string;
  label_tooltipOpen: string;
  label_toggleOutside: string;
}

export interface TabsTranslations {
  componentDescription: string;
  story_line: string;
  story_solid: string;
  story_disabled: string;
  story_controlled: string;
  story_longList: string;
  tab_overview: string;
  tab_analytics: string;
  tab_settings: string;
  tab_members: string;
  tab_billing: string;
  tab_integrations: string;
  content_overview: string;
  content_analytics: string;
  content_settings: string;
}

export interface CarouselTranslations {
  componentDescription: string;
  story_default: string;
  story_loop: string;
  story_images: string;
  story_cardsPerView: string;
  story_withApi: string;
  story_insideAlways: string;
  story_insideHover: string;
  story_outside: string;
  label_carousel: string;
  label_gallery: string;
  label_previous: string;
  label_next: string;
  label_status: string;
  label_cards_per_view: string;
  label_slide_1: string;
  label_slide_2: string;
  label_slide_3: string;
  label_slide_4: string;
  desc_slide_1: string;
  desc_slide_2: string;
  desc_slide_3: string;
  desc_slide_4: string;
  desc_cards_per_view: string;
}

export interface HeaderTranslations {
  componentDescription: string;
  story_default: string;
  label_brand: string;
  nav_home: string;
  nav_about: string;
  nav_portfolio: string;
  nav_contact: string;
}

export interface FooterTranslations {
  componentDescription: string;
  story_default: string;
  label_copyright: string;
  nav_privacy: string;
  nav_terms: string;
  nav_contact: string;
}

export interface BreadcrumbTranslations {
  componentDescription: string;
  story_default: string;
  label_home: string;
  label_components: string;
  label_breadcrumb: string;
}

export interface BackgroundTranslations {
  componentDescription: string;
  story_starfield: string;
  story_galaxy: string;
  story_milkyway: string;
  story_solid: string;
  story_particles: string;
}

export interface SectionTranslations {
  componentDescription: string;
  story_default: string;
  label_title: string;
  label_content: string;
}

export interface StackTranslations {
  componentDescription: string;
  story_default: string;
  story_horizontal: string;
  story_spacing: string;
  label_item: string;
}

export interface PageGridTranslations {
  componentDescription: string;
  story_default: string;
  story_sidebar: string;
  label_main: string;
  label_sidebar: string;
}

export interface HeadingTranslations {
  componentDescription: string;
  story_default: string;
  story_allLevels: string;
  story_sizes: string;
  story_withCustomWeight: string;
  story_fontFamilies: string;
  label_heading: string;
  label_size: string;
  label_h1: string;
  label_h2: string;
  label_h3: string;
  label_h4: string;
  label_h5: string;
  label_h6: string;
}

export interface TextTranslations {
  componentDescription: string;
  story_default: string;
  story_sizes: string;
  story_colors: string;
  story_truncated: string;
  story_fontFamilies: string;
  label_default: string;
  label_size: string;
  label_sample: string;
  label_truncated: string;
}

export interface AvatarTranslations {
  componentDescription: string;
  story_default: string;
  story_sizes: string;
  story_fallback: string;
  story_customFallback: string;
  label_user: string;
  label_stella: string;
}

export interface SeparatorTranslations {
  componentDescription: string;
  story_default: string;
  story_vertical: string;
  story_inContent: string;
  label_divider: string;
  label_left: string;
  label_right: string;
  label_content_1: string;
  label_content_2: string;
}

export interface SkeletonTranslations {
  componentDescription: string;
  story_default: string;
  story_textLines: string;
  story_circular: string;
  story_rectangular: string;
  story_cardPlaceholder: string;
}

// ---------------------------------------------------------------------------
// Root translations interface
// ---------------------------------------------------------------------------

export interface Translations {
  title: string;
  tagline: string;
  section_components: string;
  button: ButtonTranslations;
  input: InputTranslations;
  checkbox: CheckboxTranslations;
  radio: RadioTranslations;
  select: SelectTranslations;
  alert: AlertTranslations;
  toast: ToastTranslations;
  switch_: SwitchTranslations;
  badge: BadgeTranslations;
  card: CardTranslations;
  dialog: DialogTranslations;
  tooltip: TooltipTranslations;
  tabs: TabsTranslations;
  carousel: CarouselTranslations;
  header: HeaderTranslations;
  footer: FooterTranslations;
  breadcrumb: BreadcrumbTranslations;
  background: BackgroundTranslations;
  section: SectionTranslations;
  stack: StackTranslations;
  pageGrid: PageGridTranslations;
  heading: HeadingTranslations;
  text: TextTranslations;
  avatar: AvatarTranslations;
  separator: SeparatorTranslations;
  skeleton: SkeletonTranslations;
}

// ---------------------------------------------------------------------------
// EN
// ---------------------------------------------------------------------------

const en: Translations = {
  title: 'Stella UI',
  tagline: 'Scalable design system for web',
  section_components: 'Components',

  button: {
    componentDescription:
      'Core button component built on Radix UI Slot (asChild pattern). Supports `variant`, `size`, and `loading` states. Use `asChild` to render as any element (e.g. `<a>`, router `<Link>`) without losing styling.',
    story_default: 'Default',
    story_solid: 'Solid',
    story_outline: 'Outline',
    story_ghost: 'Ghost',
    story_glow: 'Glow',
    story_small: 'Small',
    story_large: 'Large',
    story_loading: 'Loading',
    story_disabled: 'Disabled',
    story_allVariants: 'All Variants',
    story_asLink: 'As Link',
    desc_glow: 'Energy-charged luminous variant. Great for hero CTAs.',
    desc_loading:
      'Shows a spinner and disables interaction while an async action is pending.',
    desc_asLink:
      'Using `asChild` to render the button as an `<a>` tag — no styling lost.',
    desc_allVariants: 'All visual variants × all size presets side by side.',
    ctrl_variant: 'Visual style variant',
    ctrl_size: 'Size preset',
    ctrl_loading: 'Show loading spinner and disable interaction',
    ctrl_disabled: 'Disabled state',
    ctrl_asChild:
      'Radix UI asChild — renders the child element as the root node',
    label_default: 'Stella Button',
    label_link: 'Go to GitHub →',
  },

  input: {
    componentDescription:
      'Single-line text input. Supports `size`, `error`, and all native `<input>` attributes including `type`, `placeholder`, and `disabled`.',
    story_default: 'Default',
    story_sizes: 'Sizes',
    story_error: 'Error (boolean)',
    story_errorMessage: 'Error with message',
    story_disabled: 'Disabled',
    story_password: 'Password',
    story_allStates: 'All States',
    label_placeholder: 'Type something…',
    label_errorMsg: 'This field is required.',
  },

  checkbox: {
    componentDescription:
      'Accessible checkbox built on Radix UI Checkbox. Supports `size`, `label`, `error`, and controlled/uncontrolled usage.',
    story_default: 'Default',
    story_withLabel: 'With Label',
    story_sizes: 'Sizes',
    story_error: 'Error',
    story_disabled: 'Disabled',
    story_controlled: 'Controlled',
    label_default: 'Accept terms and conditions',
  },

  radio: {
    componentDescription:
      'Accessible RadioGroup built on Radix UI RadioGroup. Supports `size`, `error`, `orientation`, and controlled/uncontrolled usage.',
    story_default: 'Default',
    story_horizontal: 'Horizontal',
    story_sizes: 'Sizes',
    story_error: 'Error',
    story_disabled: 'Disabled',
    story_controlled: 'Controlled',
  },

  select: {
    componentDescription:
      'Accessible dropdown built on Radix UI Select. Supports `size`, `error`, grouped options, and controlled/uncontrolled usage.',
    story_default: 'Default',
    story_sizes: 'Sizes',
    story_error: 'Error',
    story_disabled: 'Disabled',
    story_withGroups: 'With Groups',
    story_controlled: 'Controlled',
    label_placeholder: 'Select a fruit…',
    label_errorMsg: 'Please select an option.',
  },

  alert: {
    componentDescription:
      'Contextual feedback banner. Supports `info`, `success`, `warning`, and `error` variants with optional dismiss functionality.',
    story_info: 'Info',
    story_success: 'Success',
    story_warning: 'Warning',
    story_error: 'Error',
    story_dismissible: 'Dismissible',
    story_titleOnly: 'Title Only',
    story_allVariants: 'All Variants',
    title_info: 'Information',
    desc_info: 'Your session will expire in 30 minutes.',
    title_success: 'Changes saved',
    desc_success: 'Your profile has been updated successfully.',
    title_warning: 'Approaching limit',
    desc_warning: 'You are using 90% of your storage quota.',
    title_error: 'Upload failed',
    desc_error: 'The file could not be uploaded. Please try again.',
    title_dismissible: 'Update available',
    desc_dismissible: 'A new version of the app is ready to install.',
    label_dismissed: 'Alert dismissed. Refresh to see it again.',
    label_readOnly: 'Read-only mode is active.',
  },

  toast: {
    componentDescription:
      'Ephemeral notification that appears briefly then auto-dismisses. Supports `info`, `success`, `warning`, and `error` variants with optional action buttons.',
    story_info: 'Info',
    story_success: 'Success',
    story_warning: 'Warning',
    story_error: 'Error',
    story_withAction: 'With Action',
    story_titleOnly: 'Title Only',
    story_allVariants: 'All Variants',
    title_info: 'Info',
    desc_info: 'Your session will expire in 30 minutes.',
    title_success: 'Saved',
    desc_success: 'Your changes have been saved successfully.',
    title_warning: 'Storage almost full',
    desc_warning: 'You are using 90% of your storage quota.',
    title_error: 'Upload failed',
    desc_error: 'The file could not be uploaded. Please try again.',
    title_action: 'Message sent',
    desc_action: 'Your message has been delivered.',
    title_titleOnly: 'Copied to clipboard!',
    label_show: 'Show {variant} toast',
    label_undo: 'Undo',
  },

  switch_: {
    componentDescription:
      'Toggle switch for binary on/off settings. Supports `size`, `label`, `error`, and controlled/uncontrolled usage.',
    story_default: 'Default',
    story_sizes: 'Sizes',
    story_withLabel: 'With Label',
    story_error: 'Error',
    story_disabled: 'Disabled',
    story_controlled: 'Controlled',
    label_toggle: 'Toggle me',
    label_notifications: 'Enable notifications',
    label_terms: 'Accept terms',
    label_disabledOff: 'Disabled (off)',
    label_disabledOn: 'Disabled (on)',
    label_darkMode: 'Dark mode',
  },

  badge: {
    componentDescription:
      'Small label for status indication, categorization, or counts. Supports `variant`, `color`, and `size`.',
    story_default: 'Default',
    story_variants: 'Variants',
    story_colors: 'Colors',
    story_sizes: 'Sizes',
    story_withIcon: 'With Icon',
    label_badge: 'Badge',
    label_solid: 'Solid',
    label_subtle: 'Subtle',
    label_outline: 'Outline',
    label_small: 'Small',
    label_medium: 'Medium',
    label_online: 'Online',
    label_pending: 'Pending',
    label_offline: 'Offline',
    label_active: 'Active',
    label_inactive: 'Inactive',
  },

  card: {
    componentDescription:
      'Surface container for grouping related content. Supports header, body, and footer sections.',
    story_default: 'Default',
    story_withFooter: 'With Footer',
    story_minimal: 'Minimal',
    label_title: 'Card Title',
    label_description: 'Card description text.',
    label_body: 'Card body content goes here.',
    label_action: 'Action',
  },

  dialog: {
    componentDescription:
      'Modal overlay built on Radix UI Dialog. Supports title, description, footer actions, and controlled/uncontrolled usage.',
    story_basic: 'Basic',
    story_withDescription: 'With Description',
    story_withFooter: 'With Footer',
    story_controlled: 'Controlled',
    label_openDialog: 'Open Dialog',
    title_basic: 'Hello from Dialog',
    desc_basic:
      'This is a basic dialog. Click the × button or press Escape to close it.',
    label_openWithDesc: 'Open with Description',
    title_settings: 'Account Settings',
    desc_settings:
      'Manage your account preferences and personal information.',
    body_settings: 'Changes will be applied immediately after you save.',
    label_delete: 'Delete Item',
    title_confirmDelete: 'Confirm Deletion',
    desc_confirmDelete:
      'This action cannot be undone. The item will be permanently removed.',
    label_cancel: 'Cancel',
    label_deleteAction: 'Delete',
    label_openControlled: 'Open Controlled Dialog',
    title_controlled: 'Controlled Dialog',
    desc_controlled: 'This dialog is driven by external React state.',
    label_confirm: 'Confirm',
  },

  tooltip: {
    componentDescription:
      'Informational popup on hover or focus. Built on Radix UI Tooltip with configurable placement.',
    story_default: 'Default',
    story_sides: 'Sides',
    story_longContent: 'Long Content',
    story_onIcon: 'On Icon',
    story_controlled: 'Controlled',
    label_hoverMe: 'Hover me',
    label_tooltip: 'This is a tooltip',
    label_top: 'Top',
    label_left: 'Left',
    label_right: 'Right',
    label_bottom: 'Bottom',
    desc_top: 'Appears on top',
    desc_left: 'Appears on left',
    desc_right: 'Appears on right',
    desc_bottom: 'Appears on bottom',
    label_moreInfo: 'More info',
    desc_long:
      'This tooltip contains a longer description that provides additional context about the element it is attached to.',
    label_settings: 'Settings',
    label_clickToggle: 'Click to toggle tooltip',
    label_tooltipOpen: 'Tooltip is open',
    label_toggleOutside: 'Toggle from outside',
  },

  tabs: {
    componentDescription:
      'Tabbed navigation built on Radix UI Tabs. Supports `line` and `solid` visual variants with disabled tabs and controlled selection.',
    story_line: 'Line',
    story_solid: 'Solid',
    story_disabled: 'Disabled',
    story_controlled: 'Controlled',
    story_longList: 'Long List',
    tab_overview: 'Overview',
    tab_analytics: 'Analytics',
    tab_settings: 'Settings',
    tab_members: 'Members',
    tab_billing: 'Billing',
    tab_integrations: 'Integrations',
    content_overview:
      'Overview panel — a summary of your project status and recent activity.',
    content_analytics:
      'Analytics panel — charts and metrics showing usage trends.',
    content_settings:
      'Settings panel — configure preferences and manage your account.',
  },

  carousel: {
    componentDescription:
      'Embla-powered carousel with accessible slide announcements, keyboard support, and compound subcomponents for track, slides, and controls.',
    story_default: 'Default',
    story_loop: 'Loop',
    story_images: 'Images',
    story_cardsPerView: 'Cards / Viewport Count',
    story_withApi: 'With API',
    story_insideAlways: 'Inside / Always Visible',
    story_insideHover: 'Inside / Hover Reveal',
    story_outside: 'Outside / Card Height',
    label_carousel: 'Featured highlights',
    label_gallery: 'Feature gallery',
    label_previous: 'Previous slide',
    label_next: 'Next slide',
    label_status: 'Active slide',
    label_cards_per_view: 'Cards per view',
    label_slide_1: 'Launch faster',
    label_slide_2: 'Theme any surface',
    label_slide_3: 'Compose dense layouts',
    label_slide_4: 'Ship with feedback',
    desc_slide_1:
      'Start with accessible building blocks instead of rebuilding buttons, forms, and overlays from scratch.',
    desc_slide_2:
      'Use Stella tokens to move between base, surface, and accent treatments without breaking visual rhythm.',
    desc_slide_3:
      'Mix primitives like Card, Heading, Text, and Stack to build marketing panels or product highlights.',
    desc_slide_4:
      'Document interaction states in Storybook, then reuse the same components in your app and docs site.',
    desc_cards_per_view:
      'Change the width of each CarouselItem to decide how many cards appear in one viewport. That concern belongs to the slide layout, not the root Carousel API.',
  },

  header: {
    componentDescription:
      'Page-level header with brand and navigation. Responsive layout with horizontal nav links.',
    story_default: 'Default',
    label_brand: 'Stella UI',
    nav_home: 'Home',
    nav_about: 'About',
    nav_portfolio: 'Portfolio',
    nav_contact: 'Contact',
  },

  footer: {
    componentDescription:
      'Page-level footer with copyright and secondary navigation links.',
    story_default: 'Default',
    label_copyright: '© 2026 Stella UI. All rights reserved.',
    nav_privacy: 'Privacy',
    nav_terms: 'Terms',
    nav_contact: 'Contact',
  },

  breadcrumb: {
    componentDescription:
      'Hierarchical navigation trail showing the current page location within the site structure.',
    story_default: 'Default',
    label_home: 'Home',
    label_components: 'Components',
    label_breadcrumb: 'Breadcrumb',
  },

  background: {
    componentDescription:
      'Decorative full-bleed background layer. Supports starfield, galaxy, milkyway, and solid variants.',
    story_starfield: 'Starfield',
    story_galaxy: 'Galaxy',
    story_milkyway: 'Milky Way',
    story_solid: 'Solid',
    story_particles: 'Particles',
  },

  section: {
    componentDescription:
      'Semantic `<section>` wrapper with consistent vertical padding and optional heading.',
    story_default: 'Default',
    label_title: 'Section Title',
    label_content: 'Section content goes here.',
  },

  stack: {
    componentDescription:
      'Flexbox layout primitive for vertical or horizontal stacking with configurable gap.',
    story_default: 'Default',
    story_horizontal: 'Horizontal',
    story_spacing: 'Spacing',
    label_item: 'Item',
  },

  pageGrid: {
    componentDescription:
      'CSS Grid page layout with main content area and optional sidebar.',
    story_default: 'Default',
    story_sidebar: 'With Sidebar',
    label_main: 'Main Content',
    label_sidebar: 'Sidebar',
  },

  heading: {
    componentDescription:
      'Semantic heading component (h1–h6) with configurable size and weight independent of the HTML level.',
    story_default: 'Default',
    story_allLevels: 'All Levels',
    story_sizes: 'Sizes',
    story_withCustomWeight: 'With Custom Weight',
    story_fontFamilies: 'Font Families',
    label_heading: 'Heading',
    label_size: 'Size:',
    label_h1: 'Heading Level 1',
    label_h2: 'Heading Level 2',
    label_h3: 'Heading Level 3',
    label_h4: 'Heading Level 4',
    label_h5: 'Heading Level 5',
    label_h6: 'Heading Level 6',
  },

  text: {
    componentDescription:
      'General-purpose text component with configurable size, color, and truncation.',
    story_default: 'Default',
    story_sizes: 'Sizes',
    story_colors: 'Colors',
    story_truncated: 'Truncated',
    story_fontFamilies: 'Font Families',
    label_default: 'This is a text component.',
    label_size: 'Text size:',
    label_sample:
      'The quick brown fox jumps over the lazy dog. Typography is the art and technique of arranging type.',
    label_truncated:
      'This is a very long text that will be truncated after a certain number of lines to demonstrate the truncation feature of the Text component.',
  },

  avatar: {
    componentDescription:
      'Circular user avatar with image, initials fallback, or custom fallback content.',
    story_default: 'Default',
    story_sizes: 'Sizes',
    story_fallback: 'Fallback',
    story_customFallback: 'Custom Fallback',
    label_user: 'User',
    label_stella: 'Stella',
  },

  separator: {
    componentDescription:
      'Visual divider between content sections. Supports horizontal and vertical orientations.',
    story_default: 'Default',
    story_vertical: 'Vertical',
    story_inContent: 'In Content',
    label_divider: 'Divider',
    label_left: 'Left',
    label_right: 'Right',
    label_content_1:
      'Stella UI is a design system built with celestial-inspired design tokens. It provides a consistent set of components for building modern interfaces.',
    label_content_2:
      'The Separator component creates a visual divider between sections of content, helping to organize and structure layouts clearly.',
  },

  skeleton: {
    componentDescription:
      'Placeholder shimmer animation shown while content is loading. Supports text, circular, and rectangular shapes.',
    story_default: 'Default',
    story_textLines: 'Text Lines',
    story_circular: 'Circular',
    story_rectangular: 'Rectangular',
    story_cardPlaceholder: 'Card Placeholder',
  },
};

// ---------------------------------------------------------------------------
// JA
// ---------------------------------------------------------------------------

const ja: Translations = {
  title: 'Stella UI',
  tagline:
    'ウェブ向けスケーラブルなデザインシステム',
  section_components: 'コンポーネント',

  button: {
    componentDescription:
      'Radix UI Slot（asChild パターン）を基盤としたコアボタンコンポーネント。`variant`・`size`・`loading` 状態をサポートします。`asChild` を使うとスタイルを維持しながら任意の要素（`<a>` やルーターの `<Link>` など）として描画できます。',
    story_default: 'デフォルト',
    story_solid: 'ソリッド',
    story_outline: 'アウトライン',
    story_ghost: 'ゴースト',
    story_glow: 'グロウ',
    story_small: '小サイズ',
    story_large: '大サイズ',
    story_loading: 'ローディング',
    story_disabled: '無効状態',
    story_allVariants: '全バリアント',
    story_asLink: 'リンクとして描画',
    desc_glow:
      'エネルギーを纏った発光バリアント。ヒーローセクションの CTA に最適です。',
    desc_loading: '非同期処理中にスピナーを表示し、操作を無効化します。',
    desc_asLink:
      '`asChild` を使って `<a>` タグとして描画 — スタイルはそのまま維持されます。',
    desc_allVariants: '全ビジュアルバリアント × 全サイズプリセットの並列比較。',
    ctrl_variant: 'ビジュアルスタイルのバリアント',
    ctrl_size: 'サイズプリセット',
    ctrl_loading: 'ローディングスピナーを表示し操作を無効化',
    ctrl_disabled: '無効状態',
    ctrl_asChild: 'Radix UI asChild — 子要素をルートノードとして描画',
    label_default: 'Stella ボタン',
    label_link: 'GitHubへ →',
  },

  input: {
    componentDescription:
      '単一行テキスト入力コンポーネント。`size`・`error` をサポートし、`type`・`placeholder`・`disabled` などすべてのネイティブ `<input>` 属性も利用できます。',
    story_default: 'デフォルト',
    story_sizes: 'サイズ一覧',
    story_error: 'エラー（真偽値）',
    story_errorMessage: 'エラーメッセージ付き',
    story_disabled: '無効状態',
    story_password: 'パスワード',
    story_allStates: '全ステート',
    label_placeholder: '入力してください…',
    label_errorMsg: 'この項目は必須です。',
  },

  checkbox: {
    componentDescription:
      'Radix UI Checkbox を基盤としたアクセシブルなチェックボックス。`size`・`label`・`error`・制御/非制御の両モードをサポートします。',
    story_default: 'デフォルト',
    story_withLabel: 'ラベル付き',
    story_sizes: 'サイズ一覧',
    story_error: 'エラー',
    story_disabled: '無効状態',
    story_controlled: '制御コンポーネント',
    label_default: '利用規約に同意する',
  },

  radio: {
    componentDescription:
      'Radix UI RadioGroup を基盤としたアクセシブルなラジオグループ。`size`・`error`・`orientation`・制御/非制御の両モードをサポートします。',
    story_default: 'デフォルト',
    story_horizontal: '横並び',
    story_sizes: 'サイズ一覧',
    story_error: 'エラー',
    story_disabled: '無効状態',
    story_controlled: '制御コンポーネント',
  },

  select: {
    componentDescription:
      'Radix UI Select を基盤としたアクセシブルなドロップダウン。`size`・`error`・グループ化オプション・制御/非制御の両モードをサポートします。',
    story_default: 'デフォルト',
    story_sizes: 'サイズ一覧',
    story_error: 'エラー',
    story_disabled: '無効状態',
    story_withGroups: 'グループ化',
    story_controlled: '制御コンポーネント',
    label_placeholder: '果物を選んでください…',
    label_errorMsg: '選択してください。',
  },

  alert: {
    componentDescription:
      'コンテキストに応じたフィードバックバナー。`info`・`success`・`warning`・`error` バリアントに対応し、任意で閉じる機能も利用できます。',
    story_info: 'お知らせ',
    story_success: '成功',
    story_warning: '警告',
    story_error: 'エラー',
    story_dismissible: '閉じるボタン付き',
    story_titleOnly: 'タイトルのみ',
    story_allVariants: '全バリアント',
    title_info: 'お知らせ',
    desc_info: 'セッションはあと30分で期限切れになります。',
    title_success: '変更を保存しました',
    desc_success: 'プロフィールが正常に更新されました。',
    title_warning: '上限に近づいています',
    desc_warning: 'ストレージ容量の90%を使用しています。',
    title_error: 'アップロード失敗',
    desc_error:
      'ファイルをアップロードできませんでした。もう一度お試しください。',
    title_dismissible: 'アップデートのお知らせ',
    desc_dismissible: '新しいバージョンのアプリをインストールできます。',
    label_dismissed:
      'アラートを閉じました。再表示するにはページを更新してください。',
    label_readOnly: '読み取り専用モードが有効です。',
  },

  toast: {
    componentDescription:
      '一時的に表示され自動で消える通知コンポーネント。`info`・`success`・`warning`・`error` バリアントに対応し、アクションボタンも設定できます。',
    story_info: 'お知らせ',
    story_success: '成功',
    story_warning: '警告',
    story_error: 'エラー',
    story_withAction: 'アクション付き',
    story_titleOnly: 'タイトルのみ',
    story_allVariants: '全バリアント',
    title_info: 'お知らせ',
    desc_info: 'セッションはあと30分で期限切れになります。',
    title_success: '保存しました',
    desc_success: '変更が正常に保存されました。',
    title_warning: 'ストレージがほぼ満杯です',
    desc_warning: 'ストレージ容量の90%を使用しています。',
    title_error: 'アップロード失敗',
    desc_error:
      'ファイルをアップロードできませんでした。もう一度お試しください。',
    title_action: 'メッセージを送信しました',
    desc_action: 'メッセージが正常に配信されました。',
    title_titleOnly: 'クリップボードにコピーしました！',
    label_show: '{variant}トーストを表示',
    label_undo: '元に戻す',
  },

  switch_: {
    componentDescription:
      'オン/オフの切り替え用トグルスイッチ。`size`・`label`・`error`・制御/非制御の両モードをサポートします。',
    story_default: 'デフォルト',
    story_sizes: 'サイズ一覧',
    story_withLabel: 'ラベル付き',
    story_error: 'エラー',
    story_disabled: '無効状態',
    story_controlled: '制御コンポーネント',
    label_toggle: '切り替える',
    label_notifications: '通知を有効にする',
    label_terms: '利用規約に同意する',
    label_disabledOff: '無効（オフ）',
    label_disabledOn: '無効（オン）',
    label_darkMode: 'ダークモード',
  },

  badge: {
    componentDescription:
      'ステータス表示やカテゴリ分類に使う小さなラベル。`variant`・`color`・`size` をサポートします。',
    story_default: 'デフォルト',
    story_variants: 'バリアント',
    story_colors: 'カラー',
    story_sizes: 'サイズ一覧',
    story_withIcon: 'アイコン付き',
    label_badge: 'バッジ',
    label_solid: 'ソリッド',
    label_subtle: 'サブトル',
    label_outline: 'アウトライン',
    label_small: '小',
    label_medium: '中',
    label_online: 'オンライン',
    label_pending: '保留中',
    label_offline: 'オフライン',
    label_active: '有効',
    label_inactive: '無効',
  },

  card: {
    componentDescription:
      '関連するコンテンツをまとめるサーフェスコンテナ。ヘッダー・ボディ・フッターの各セクションを持ちます。',
    story_default: 'デフォルト',
    story_withFooter: 'フッター付き',
    story_minimal: 'ミニマル',
    label_title: 'カードタイトル',
    label_description: 'カードの説明テキスト。',
    label_body: 'カード本文のコンテンツがここに入ります。',
    label_action: 'アクション',
  },

  dialog: {
    componentDescription:
      'Radix UI Dialog を基盤としたモーダルオーバーレイ。タイトル・説明・フッターアクション・制御/非制御の両モードをサポートします。',
    story_basic: '基本',
    story_withDescription: '説明文付き',
    story_withFooter: 'フッター付き',
    story_controlled: '制御コンポーネント',
    label_openDialog: 'ダイアログを開く',
    title_basic: 'ダイアログからこんにちは',
    desc_basic:
      '基本的なダイアログです。×ボタンまたは Escape キーで閉じられます。',
    label_openWithDesc: '説明文付きで開く',
    title_settings: 'アカウント設定',
    desc_settings: 'アカウントの設定や個人情報を管理します。',
    body_settings: '保存するとすぐに変更が反映されます。',
    label_delete: 'アイテムを削除',
    title_confirmDelete: '削除の確認',
    desc_confirmDelete:
      'この操作は取り消せません。アイテムは完全に削除されます。',
    label_cancel: 'キャンセル',
    label_deleteAction: '削除',
    label_openControlled: '制御ダイアログを開く',
    title_controlled: '制御ダイアログ',
    desc_controlled:
      'このダイアログは外部の React ステートによって制御されています。',
    label_confirm: '確認',
  },

  tooltip: {
    componentDescription:
      'ホバーまたはフォーカス時に表示される情報ポップアップ。Radix UI Tooltip を基盤とし、表示位置を設定できます。',
    story_default: 'デフォルト',
    story_sides: '表示位置',
    story_longContent: '長いコンテンツ',
    story_onIcon: 'アイコン上',
    story_controlled: '制御コンポーネント',
    label_hoverMe: 'ホバーしてね',
    label_tooltip: 'ツールチップです',
    label_top: '上',
    label_left: '左',
    label_right: '右',
    label_bottom: '下',
    desc_top: '上に表示',
    desc_left: '左に表示',
    desc_right: '右に表示',
    desc_bottom: '下に表示',
    label_moreInfo: '詳細',
    desc_long:
      'このツールチップには、関連する要素についての補足情報がより詳しく記載されています。',
    label_settings: '設定',
    label_clickToggle: 'クリックでツールチップを切り替え',
    label_tooltipOpen: 'ツールチップ表示中',
    label_toggleOutside: '外部から切り替え',
  },

  tabs: {
    componentDescription:
      'Radix UI Tabs を基盤としたタブナビゲーション。`line`・`solid` のビジュアルバリアント、無効タブ、制御モードをサポートします。',
    story_line: 'ライン',
    story_solid: 'ソリッド',
    story_disabled: '無効タブ',
    story_controlled: '制御コンポーネント',
    story_longList: '多数のタブ',
    tab_overview: '概要',
    tab_analytics: 'アナリティクス',
    tab_settings: '設定',
    tab_members: 'メンバー',
    tab_billing: '請求',
    tab_integrations: 'インテグレーション',
    content_overview:
      '概要パネル — プロジェクトの状況と最近のアクティビティの要約です。',
    content_analytics:
      'アナリティクスパネル — 利用傾向を示すチャートと指標です。',
    content_settings:
      '設定パネル — 各種設定やアカウント管理を行えます。',
  },

  carousel: {
    componentDescription:
      'Embla ベースのカルーセル。スライド読み上げ、キーボード操作、トラック・スライド・コントロールの複合 API を備えています。',
    story_default: 'デフォルト',
    story_loop: 'ループ',
    story_images: '画像',
    story_cardsPerView: 'カード / 表示枚数',
    story_withApi: 'API 連携',
    story_insideAlways: '内側 / 常時表示',
    story_insideHover: '内側 / ホバーで表示',
    story_outside: '外側 / カード高に配置',
    label_carousel: '注目ハイライト',
    label_gallery: '画像ギャラリー',
    label_previous: '前のスライド',
    label_next: '次のスライド',
    label_status: '現在のスライド',
    label_cards_per_view: '1画面のカード枚数',
    label_slide_1: '立ち上がりを速く',
    label_slide_2: 'どの面にもテーマを',
    label_slide_3: '密度の高いレイアウトを構成',
    label_slide_4: 'フィードバック込みで出荷',
    desc_slide_1:
      'ボタンやフォーム、オーバーレイを毎回作り直さず、アクセシブルな土台から始められます。',
    desc_slide_2:
      'Stella のトークンで、ベース・サーフェス・アクセントの切り替えをリズムを崩さずに扱えます。',
    desc_slide_3:
      'Card、Heading、Text などのプリミティブを組み合わせて、紹介セクションや製品ハイライトを構築できます。',
    desc_slide_4:
      'Storybook で状態遷移を確認し、そのままアプリやドキュメントサイトで再利用できます。',
    desc_cards_per_view:
      '1画面に何枚出すかは Carousel 自体の size prop ではなく、各 CarouselItem の幅で決めるほうが自然です。',
  },

  header: {
    componentDescription:
      'ブランドとナビゲーションを含むページレベルのヘッダー。水平方向のナビリンクによるレスポンシブレイアウトです。',
    story_default: 'デフォルト',
    label_brand: 'Stella UI',
    nav_home: 'ホーム',
    nav_about: 'アバウト',
    nav_portfolio: 'ポートフォリオ',
    nav_contact: 'コンタクト',
  },

  footer: {
    componentDescription:
      '著作権表示と補助ナビゲーションリンクを含むページレベルのフッター。',
    story_default: 'デフォルト',
    label_copyright: '© 2026 Stella UI. All rights reserved.',
    nav_privacy: 'プライバシー',
    nav_terms: '利用規約',
    nav_contact: 'お問い合わせ',
  },

  breadcrumb: {
    componentDescription:
      'サイト構造内の現在のページ位置を示す階層型ナビゲーション。',
    story_default: 'デフォルト',
    label_home: 'ホーム',
    label_components: 'コンポーネント',
    label_breadcrumb: 'パンくずリスト',
  },

  background: {
    componentDescription:
      '装飾用の全幅背景レイヤー。スターフィールド・ギャラクシー・天の川・ソリッドのバリアントに対応します。',
    story_starfield: 'スターフィールド',
    story_galaxy: 'ギャラクシー',
    story_milkyway: '天の川',
    story_solid: 'ソリッド',
    story_particles: 'パーティクル',
  },

  section: {
    componentDescription:
      '一貫した上下パディングと任意の見出しを持つセマンティックな `<section>` ラッパー。',
    story_default: 'デフォルト',
    label_title: 'セクションタイトル',
    label_content: 'セクションのコンテンツがここに入ります。',
  },

  stack: {
    componentDescription:
      '縦・横方向のスタッキングと可変ギャップに対応する Flexbox レイアウトプリミティブ。',
    story_default: 'デフォルト',
    story_horizontal: '横並び',
    story_spacing: 'スペーシング',
    label_item: 'アイテム',
  },

  pageGrid: {
    componentDescription:
      'メインコンテンツ領域とオプションのサイドバーを持つ CSS Grid ページレイアウト。',
    story_default: 'デフォルト',
    story_sidebar: 'サイドバー付き',
    label_main: 'メインコンテンツ',
    label_sidebar: 'サイドバー',
  },

  heading: {
    componentDescription:
      'セマンティックな見出しコンポーネント（h1〜h6）。HTML レベルとは独立してサイズやウェイトを設定できます。',
    story_default: 'デフォルト',
    story_allLevels: '全レベル',
    story_sizes: 'サイズ一覧',
    story_withCustomWeight: 'カスタムウェイト',
    story_fontFamilies: 'フォントファミリー',
    label_heading: '見出し',
    label_size: 'サイズ:',
    label_h1: '見出しレベル 1',
    label_h2: '見出しレベル 2',
    label_h3: '見出しレベル 3',
    label_h4: '見出しレベル 4',
    label_h5: '見出しレベル 5',
    label_h6: '見出しレベル 6',
  },

  text: {
    componentDescription:
      'サイズ・カラー・トランケーションを設定できる汎用テキストコンポーネント。',
    story_default: 'デフォルト',
    story_sizes: 'サイズ一覧',
    story_colors: 'カラー',
    story_truncated: 'トランケーション',
    story_fontFamilies: 'フォントファミリー',
    label_default: 'テキストコンポーネントです。',
    label_size: 'テキストサイズ:',
    label_sample:
      'すばやい茶色の狐が怠惰な犬を飛び越える。タイポグラフィは文字を配置する技術と芸術です。',
    label_truncated:
      'これは非常に長いテキストで、Text コンポーネントのトランケーション機能を示すために一定の行数を超えると省略されます。',
  },

  avatar: {
    componentDescription:
      '画像・イニシャルフォールバック・カスタムフォールバックに対応する円形ユーザーアバター。',
    story_default: 'デフォルト',
    story_sizes: 'サイズ一覧',
    story_fallback: 'フォールバック',
    story_customFallback: 'カスタムフォールバック',
    label_user: 'ユーザー',
    label_stella: 'ステラ',
  },

  separator: {
    componentDescription:
      'コンテンツ間の視覚的な区切り線。水平・垂直の両方向に対応します。',
    story_default: 'デフォルト',
    story_vertical: '垂直',
    story_inContent: 'コンテンツ内',
    label_divider: '区切り線',
    label_left: '左',
    label_right: '右',
    label_content_1:
      'Stella UI は天体にインスパイアされたデザイントークンで構築されたデザインシステムです。モダンなインターフェースを構築するための一貫したコンポーネントセットを提供します。',
    label_content_2:
      'Separator コンポーネントはコンテンツのセクション間に視覚的な区切り線を作成し、レイアウトを明確に整理・構造化するのに役立ちます。',
  },

  skeleton: {
    componentDescription:
      'コンテンツ読み込み中に表示されるシマーアニメーション付きプレースホルダー。テキスト・円形・矩形の各形状に対応します。',
    story_default: 'デフォルト',
    story_textLines: 'テキスト行',
    story_circular: '円形',
    story_rectangular: '矩形',
    story_cardPlaceholder: 'カードプレースホルダー',
  },
};

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const translations: Record<Locale, Translations> = { en, ja };

export function t(locale: Locale): Translations {
  return translations[locale] ?? translations.en;
}

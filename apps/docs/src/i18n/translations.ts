import type { Locale } from './locales';

export interface ButtonTranslations {
  // Component meta
  componentDescription: string;
  // Story names
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
  // Story descriptions
  desc_glow: string;
  desc_loading: string;
  desc_asLink: string;
  desc_allVariants: string;
  // Control labels
  ctrl_variant: string;
  ctrl_size: string;
  ctrl_loading: string;
  ctrl_disabled: string;
  ctrl_asChild: string;
  // Button label text
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

export interface Translations {
  // Global
  title: string;
  tagline: string;
  // Sections
  section_components: string;
  // Button
  button: ButtonTranslations;
  // Input
  input: InputTranslations;
  // Checkbox
  checkbox: CheckboxTranslations;
  // Radio
  radio: RadioTranslations;
  // Select
  select: SelectTranslations;
}

const en: Translations = {
  title: 'Stella UI',
  tagline: 'Scalable design system for web, portfolio, MV, and 3D',
  section_components: 'Components',
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
    desc_loading: 'Shows a spinner and disables interaction while an async action is pending.',
    desc_asLink: 'Using `asChild` to render the button as an `<a>` tag — no styling lost.',
    desc_allVariants: 'All visual variants × all size presets side by side.',
    ctrl_variant: 'Visual style variant',
    ctrl_size: 'Size preset',
    ctrl_loading: 'Show loading spinner and disable interaction',
    ctrl_disabled: 'Disabled state',
    ctrl_asChild: 'Radix UI asChild — renders the child element as the root node',
    label_default: 'Stella Button',
    label_link: 'Go to GitHub →',
  },
};

const ja: Translations = {
  title: 'Stella UI',
  tagline: 'ウェブ・ポートフォリオ・MV演出・3D空間まで対応するスケーラブルなデザインシステム',
  section_components: 'コンポーネント',
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
    desc_glow: 'エネルギーを纏った発光バリアント。ヒーローセクションの CTA に最適です。',
    desc_loading: '非同期処理中にスピナーを表示し、操作を無効化します。',
    desc_asLink: '`asChild` を使って `<a>` タグとして描画 — スタイルはそのまま維持されます。',
    desc_allVariants: '全ビジュアルバリアント × 全サイズプリセットの並列比較。',
    ctrl_variant: 'ビジュアルスタイルのバリアント',
    ctrl_size: 'サイズプリセット',
    ctrl_loading: 'ローディングスピナーを表示し操作を無効化',
    ctrl_disabled: '無効状態',
    ctrl_asChild: 'Radix UI asChild — 子要素をルートノードとして描画',
    label_default: 'Stella ボタン',
    label_link: 'GitHubへ →',
  },
};

export const translations: Record<Locale, Translations> = { en, ja };

export function t(locale: Locale): Translations {
  return translations[locale] ?? translations.en;
}

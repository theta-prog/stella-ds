'use client'

import { Checkbox, Input, RadioGroup, RadioItem, Select, SelectContent, SelectItem, SelectTrigger, Switch } from '@stella-ds/react'

export function CheckboxPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Checkbox label="Accept terms and conditions" defaultChecked />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Required field" error />
      <Checkbox label="Disabled option" disabled />
    </div>
  )
}

export function InputPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 320 }}>
      <Input placeholder="Default input" />
      <Input placeholder="Small" size="sm" />
      <Input placeholder="Large" size="lg" />
      <Input placeholder="Email address" error="Email is required" value="" onChange={() => {}} />
    </div>
  )
}

export function RadioPreview() {
  return (
    <RadioGroup defaultValue="b">
      <RadioItem value="a" label="Option A" />
      <RadioItem value="b" label="Option B" />
      <RadioItem value="c" label="Option C" />
      <RadioItem value="d" label="Disabled" disabled />
    </RadioGroup>
  )
}

export function SelectPreview() {
  return (
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
  )
}

export function SwitchPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Switch label="Enable notifications" defaultChecked />
      <Switch label="Dark mode" size="sm" />
      <Switch label="Error state" error />
      <Switch label="Disabled" disabled />
    </div>
  )
}

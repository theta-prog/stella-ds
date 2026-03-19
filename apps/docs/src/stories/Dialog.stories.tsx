import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { expect, waitFor, within } from 'storybook/test';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@stella-ds/react';
import { Button } from '@stella-ds/react';
import { useT, translations } from '../i18n';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: { layout: 'centered', docs: { description: { component: translations.en.dialog.componentDescription } } },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Basic: Story = {
  render: () => {
    const tr = useT();
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="solid">{tr.dialog.label_openDialog}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>{tr.dialog.title_basic}</DialogTitle>
          <p style={{ margin: '1rem 0 0', fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
            {tr.dialog.desc_basic}
          </p>
        </DialogContent>
      </Dialog>
    );
  },
  play: async ({ canvas, userEvent }) => {
    // 1. Trigger ボタンをクリックして Dialog を開く
    const trigger = canvas.getByRole('button');
    await userEvent.click(trigger);

    // 2. Radix UI はポータル経由でレンダリングするので document.body で探す
    const body = within(document.body);
    const dialog = await body.findByRole('dialog');
    await waitFor(() => expect(dialog).toBeVisible(), { timeout: 1000 });

    // 3. Escape キーで閉じる
    await userEvent.keyboard('{Escape}');

    // 4. Dialog が非表示になることを確認（close animation 完了待ち）
    await waitFor(() => expect(dialog).not.toBeVisible(), { timeout: 1000 });
  },
};

export const WithDescription: Story = {
  render: () => {
    const tr = useT();
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="solid">{tr.dialog.label_openWithDesc}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{tr.dialog.title_settings}</DialogTitle>
            <DialogDescription>
              {tr.dialog.desc_settings}
            </DialogDescription>
          </DialogHeader>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
            {tr.dialog.body_settings}
          </p>
        </DialogContent>
      </Dialog>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const tr = useT();
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{tr.dialog.label_delete}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{tr.dialog.title_confirmDelete}</DialogTitle>
            <DialogDescription>
              {tr.dialog.desc_confirmDelete}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost" size="sm">{tr.dialog.label_cancel}</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="solid" size="sm">{tr.dialog.label_deleteAction}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const tr = useT();
    const [open, setOpen] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <Button variant="solid" onClick={() => setOpen(true)}>
          {tr.dialog.label_openControlled}
        </Button>

        <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
          Dialog is {open ? 'open' : 'closed'}
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent showClose={false}>
            <DialogHeader>
              <DialogTitle>{tr.dialog.title_controlled}</DialogTitle>
              <DialogDescription>
                {tr.dialog.desc_controlled}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                {tr.dialog.label_cancel}
              </Button>
              <Button variant="solid" size="sm" onClick={() => setOpen(false)}>
                {tr.dialog.label_confirm}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@stella-ui/react';
import { Button } from '@stella-ui/react';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

export const Basic: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="solid">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Hello from Dialog</DialogTitle>
        <p style={{ margin: '1rem 0 0', fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
          This is a basic dialog. Click the × button or press Escape to close it.
        </p>
      </DialogContent>
    </Dialog>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="solid">Open with Description</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Account Settings</DialogTitle>
          <DialogDescription>
            Manage your account preferences and personal information.
          </DialogDescription>
        </DialogHeader>
        <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem', color: 'var(--stella-color-text-secondary)' }}>
          Changes will be applied immediately after you save.
        </p>
      </DialogContent>
    </Dialog>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            This action cannot be undone. The item will be permanently removed.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" size="sm">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="solid" size="sm">Delete</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <Button variant="solid" onClick={() => setOpen(true)}>
          Open Controlled Dialog
        </Button>

        <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--stella-color-text-secondary)' }}>
          Dialog is {open ? 'open' : 'closed'}
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent showClose={false}>
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <DialogDescription>
                This dialog is driven by external React state. The default close
                button is hidden; use the buttons below to dismiss.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="solid" size="sm" onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

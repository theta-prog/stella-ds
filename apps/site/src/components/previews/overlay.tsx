'use client'

import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@stella-ds/react'
import { wrapStyle } from './shared'

export function DialogPreview() {
  return (
    <Dialog>
      <DialogTrigger asChild><Button>Open Dialog</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone. Please confirm to proceed.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function TooltipPreview() {
  return (
    <TooltipProvider>
      <div style={wrapStyle}>
        <Tooltip>
          <TooltipTrigger asChild><Button variant="outline">Hover me (top)</Button></TooltipTrigger>
          <TooltipContent side="top">Helpful hint text</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild><Button variant="outline">Hover me (bottom)</Button></TooltipTrigger>
          <TooltipContent side="bottom">Appears below</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

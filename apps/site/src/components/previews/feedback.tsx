'use client'

import { Alert, AlertDescription, AlertTitle, Skeleton } from '@stella-ds/react'
import { wrapStyle } from './shared'

export function AlertPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
      <Alert variant="info"><AlertTitle>Info</AlertTitle><AlertDescription>This is an informational message.</AlertDescription></Alert>
      <Alert variant="success"><AlertTitle>Success</AlertTitle><AlertDescription>Your changes have been saved.</AlertDescription></Alert>
      <Alert variant="warning"><AlertTitle>Warning</AlertTitle><AlertDescription>Please review before continuing.</AlertDescription></Alert>
      <Alert variant="error"><AlertTitle>Error</AlertTitle><AlertDescription>Something went wrong.</AlertDescription></Alert>
    </div>
  )
}

export function SkeletonPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
      <Skeleton variant="text" lines={3} />
      <div style={wrapStyle}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={48} height={48} />
      </div>
      <Skeleton variant="rectangular" width="100%" height={80} />
    </div>
  )
}

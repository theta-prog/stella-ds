'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, Tabs, TabsContent, TabsList, TabsTrigger, Text } from '@stella-ds/react'

export function BreadcrumbPreview() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink isCurrentPage>Breadcrumb</BreadcrumbLink></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function TabsPreview() {
  return (
    <Tabs defaultValue="overview" style={{ width: '100%' }}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="overview"><Text size="sm" color="secondary">Overview content goes here.</Text></TabsContent>
      <TabsContent value="settings"><Text size="sm" color="secondary">Settings content goes here.</Text></TabsContent>
      <TabsContent value="activity"><Text size="sm" color="secondary">Activity content goes here.</Text></TabsContent>
    </Tabs>
  )
}

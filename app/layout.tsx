import type { ReactNode } from 'react'
import configPromise from '../payload/payload.config'
import { RootLayout, metadata as payloadMetadata } from '@payloadcms/next/layouts'
import { serverFunction } from './admin/serverFunction'

export const metadata = payloadMetadata

export default async function Layout({ children }: { children: ReactNode }) {
  const config = await configPromise
  return (
    <RootLayout config={config} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}

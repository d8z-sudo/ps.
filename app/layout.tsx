import type { ReactNode } from 'react'
import configPromise from '../payload/payload.config'
import { RootLayout, metadata as payloadMetadata } from '@payloadcms/next/layouts'
import { serverFunction } from './admin/serverFunction'
import { getImportMap } from '../payload/importMap'

export const metadata = payloadMetadata

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootLayout
      config={configPromise}
      importMap={getImportMap()}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  )
}

export const dynamic = "force-dynamic"

import configPromise from '../../../payload/payload.config'
import { RootPage } from '@payloadcms/next/views'
import { getImportMap } from '../../../payload/importMap'

type AdminParamsIn = { segments?: string[] }
type AdminSearchParamsIn = Record<string, string | string[] | undefined>
type AdminSearchParamsOut = Record<string, string | string[]>

type AdminPageProps = {
  params: Promise<AdminParamsIn>
  searchParams: Promise<AdminSearchParamsIn>
}

export default function AdminPage({ params, searchParams }: AdminPageProps) {
  const normalizedParams: Promise<{ segments: string[] }> = params.then(p => ({
    segments: p?.segments ?? [],
  }))

  const normalizedSearchParams: Promise<AdminSearchParamsOut> =
    searchParams.then(sp =>
      Object.fromEntries(
        Object.entries(sp).filter(([, v]) => v !== undefined),
      ) as AdminSearchParamsOut,
    )

  return (
    <RootPage
      config={configPromise}
      importMap={getImportMap()}
      params={normalizedParams}
      searchParams={normalizedSearchParams}
    />
  )
}

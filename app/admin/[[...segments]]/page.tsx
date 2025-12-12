import configPromise from '../../../payload/payload.config'
import { RootPage } from '@payloadcms/next/views'

export default async function AdminPage({ params }: { params: { segments?: string[] } }) {
  const config = await configPromise
  return <RootPage config={config} params={params} />
}

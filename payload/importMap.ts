import configPromise from './payload.config'
import { getPayload } from 'payload'

type ImportMapLike = {
  imports: Record<string, string>
  scopes?: Record<string, Record<string, string>>
}

const EMPTY_IMPORT_MAP: ImportMapLike = { imports: {} }

export async function getImportMap(): Promise<ImportMapLike> {
  try {
    const config = await configPromise
    const payload = await getPayload({ config })

    const maybe = (payload as unknown as { importMap?: unknown }).importMap

    if (typeof maybe === 'object' && maybe !== null) {
      // best-effort cast; payload will supply correct shape at runtime
      return maybe as ImportMapLike
    }

    return EMPTY_IMPORT_MAP
  } catch {
    // During build/SSG Payload may not be fully initialized; don't crash the build.
    return EMPTY_IMPORT_MAP
  }
}

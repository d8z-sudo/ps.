'use server'

import configPromise from '../../payload/payload.config'
import { getImportMap } from '../../payload/importMap'
import { handleServerFunctions } from '@payloadcms/next/layouts'

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

export async function serverFunction(input: unknown) {
  if (!isRecord(input)) {
    throw new Error('Invalid server function payload (not an object)')
  }

  const name = input.name
  if (typeof name !== 'string') {
    throw new Error('Invalid server function payload (missing "name")')
  }

  const rawArgs = input.args
  const args: Record<string, unknown> = isRecord(rawArgs) ? rawArgs : {}

  const importMap = await getImportMap()

  return handleServerFunctions({
    name,
    args,
    config: configPromise,
    importMap,
  })
}

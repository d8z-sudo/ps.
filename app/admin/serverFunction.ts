'use server'

import { handleServerFunctions } from '@payloadcms/next/layouts'

export async function serverFunction(args: unknown) {
  return handleServerFunctions(args as any)
}

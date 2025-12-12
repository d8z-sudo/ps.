import path from 'path'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'

export function buildPayloadConfig() {
  return buildConfig({
    secret: process.env.PAYLOAD_SECRET || '',
    db: postgresAdapter({
      pool: { connectionString: process.env.DATABASE_URI },
    }),
    admin: { user: 'users' },
    collections: [
      {
        slug: 'users',
        auth: true,
        fields: [
          {
            name: 'role',
            type: 'select',
            required: true,
            defaultValue: 'admin',
            options: [
              { label: 'Admin', value: 'admin' },
              { label: 'Manager', value: 'manager' },
              { label: 'Client', value: 'client' },
            ],
          },
        ],
      },
    ],
    typescript: {
      outputFile: path.resolve(process.cwd(), 'payload/payload-types.ts'),
    },
  })
}

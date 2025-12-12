import config from '../../../../../payload/payload.config'

export async function GET() {
  try {
    const resolved = await config
    return Response.json({
      ok: true,
      hasConfig: !!resolved,
      hasAdmin: !!resolved?.admin,
      collections: (resolved?.collections || []).map((c: any) => c.slug),
      routes: resolved?.routes,
    })
  } catch (e: any) {
    return Response.json(
      { ok: false, error: String(e?.message || e), stack: e?.stack || null },
      { status: 500 },
    )
  }
}

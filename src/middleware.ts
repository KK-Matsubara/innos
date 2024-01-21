import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const locales = ['en', 'ja']

  // パスにロケールが付与されているかチェックする
  const { pathname } = req.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // ロケールがない場合は、リクエストのロケールを取得する
  const country = req.geo?.country

  // 日本からのアクセスはJPに、それ以外はenにリダイレクトする
  if (country && country === 'JP') {
    return NextResponse.redirect(new URL('/ja' + pathname, req.nextUrl))
  } else {
    return NextResponse.redirect(new URL('/en' + pathname, req.nextUrl))
  }
}
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'بطل ستوريز — طفلك بطل القصة',
  description: 'قصص أطفال مخصصة بالاسم والشكل — طفلك هو البطل. PDF فوري أو كتاب مطبوع مع التوصيل لكل مصر.',
  keywords: 'قصص اطفال، كتاب مخصص، هدية اطفال، طفلك البطل، بطل ستوريز',
  openGraph: {
    title: 'بطل ستوريز — طفلك بطل القصة',
    description: 'قصص أطفال مخصصة بالاسم والشكل',
    locale: 'ar_EG',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Tajawal:wght@400;500;700;900&family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

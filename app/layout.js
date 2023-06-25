import './globals.css'
export const metadata = {
  title: '@rabugdev',
  description: '@rabugdev',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

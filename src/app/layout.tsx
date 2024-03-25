import type { Metadata } from "next"
import font from '@/app/lib/font'
import AppBackground from "./ui/background/AppBackground"
import "./reset.css"
import "./global.css"
import StoreProvider from "./StoreProvider"

export const metadata: Metadata = {
  title: "KangarooTodo",
  description: "Your tasks squashing partner",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StoreProvider>
          <AppBackground />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}

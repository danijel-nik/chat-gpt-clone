import 'styles/globals.css'
import Sidebar from 'components/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <Sidebar />
          </div>

          {/* Client provider - notification */}

          <div className="bg-[#343541] flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

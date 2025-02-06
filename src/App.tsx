import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/components/theme/theme-provider'
export function App() {
  return (
    <>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <RouterProvider router={router} />
      <Toaster richColors />
      </ThemeProvider>
      
    </>
  )
}


import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './components/lib/react-query'
export function App() {
  return (
    <>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <Toaster richColors />
      </ThemeProvider>

    </>
  )
}


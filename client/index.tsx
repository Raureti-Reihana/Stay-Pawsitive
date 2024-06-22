import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routing.tsx'
import App from './components/App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={client}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </QueryClientProvider>,
  )
})

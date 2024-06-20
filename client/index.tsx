import { createRoot } from 'react-dom/client'

import App from './components/App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  )
})

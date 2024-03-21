import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Toaster } from "@/components/ui/sonner";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Loading } from "@/components/auth/loading";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            <App />
          </ConvexClientProvider>
        </Suspense>
  </React.StrictMode>,
)





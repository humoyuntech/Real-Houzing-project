import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "antd/dist/reset.css"
import './index.css'
import Root from './root'
import RootContext from './context'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootContext>
      <Root />
    </RootContext>
  </StrictMode>,
)

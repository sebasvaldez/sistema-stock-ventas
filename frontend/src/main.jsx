import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { InventoryApp } from './InventoryApp'
import { BrowserRouter as Router } from 'react-router-dom'


createRoot(document.getElementById('root')).render(

    <Router>

        <InventoryApp />
    </Router>
)

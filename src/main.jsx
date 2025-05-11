import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import './index.css'
import Syngri from "./pages/syngri";
import SoundTrack from "./pages/soundtrack";
import Alva from "./pages/Alva";

const router = createBrowserRouter([
    { path: '/',  element: <App /> },
    { path: 'syngri', element: <Syngri />},
    { path: 'soundtrack', element: <SoundTrack />},
    { path: 'alva', element: <Alva />},
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
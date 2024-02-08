import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { Auth0Provider } from '@auth0/auth0-react'

import Search from './components/Search.jsx';
import Genres from './components/Genres.jsx';
import NotFound from './components/NotFound.jsx';
import Creators from './components/Creators.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Search />} />
      <Route path='genres' element={<Genres />} />
      <Route path='creators' element={<Creators />} />

      <Route errorElement={<NotFound />} />

    </Route>

  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider domain="dev-l1zd43003lf3txz7.us.auth0.com"
      clientId="s9DgtK6by7rOzuDYV0YygI0KZgzW2Mxj"
      authorizationParams={{
        redirect_uri: window.location.origin
      }} >
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Auth0Provider>
  </React.StrictMode>,
)

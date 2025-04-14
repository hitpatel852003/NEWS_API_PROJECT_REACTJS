import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './navandfooter/Layout.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import Todolist from './About/Todolist.jsx'
import Github from './Github/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
      {
        path:'',
        element:<Home></Home>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'General',
        element:<Home key='general' country={'us'} category={'general'} headline={'General News Headlines'}></Home>
        
      },
      {
        path:'Business',
        element:<Home key='business' country={'us'} category={'business'} headlines={'Business News Headlines'}></Home>
      },
      {
        path:'Entertainment',
        element:<Home key='entertainment' country={'us'} category={'entertainment'} headlines={'Entertainment News Headlines'}></Home>
      },
      {
        path:'Health',
        element:<Home key='health' country={'us'} category={'health'} headlines={'health News Headlines'}></Home>
      },
      {
        path: "Science",
        element: <Home  key="science"  country={"us"} category={"science"} headlines={"Science News Headline"}></Home>,
      },
      {
        path: "Sports",
        element: <Home  key="sports"  country={"us"} category={"sports"} headlines={"Sport News Headline"}></Home>,
      },
      {
        path: "Technology",
        element: <Home  key="technology"  country={"us"} category={"technology"} headlines={"Technology News Headline"}></Home>,
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'github',
        element:<Github></Github>
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}>
        </RouterProvider>
  </StrictMode>,
)

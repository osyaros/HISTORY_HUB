import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './pages/MainPage/MainPage.jsx';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import cls from './main.module.scss';
import DetailPage from './pages/DetaiPage/DetailPage.jsx';
import CategoryPage from './pages/CategoryPage/CategoryPage.jsx';
const routes = createBrowserRouter([
  {   
      path: '/',
      element: <MainPage />
  },
  {
    path: '/detailpage/:index',
    element: <DetailPage />
  },
  {
    path: '/persons',
    element: <CategoryPage />
  },
  {
    path: '/school_of_faithful',
    element: <CategoryPage />,
    
  },
  {
    path: '/sights',
    element: <CategoryPage />
  },
  {
    path: '/events',
    element: <CategoryPage />
  },

  
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={cls.main}>
      <RouterProvider router={routes}/>
    </div>
  </React.StrictMode>,
)

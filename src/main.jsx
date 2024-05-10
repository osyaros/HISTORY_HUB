import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './pages/MainPage/MainPage.jsx';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import cls from './main.module.scss';
const routes = createBrowserRouter([
  {   
      path: '/',
      element: <MainPage />
  },


  
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={cls.main}>
      <RouterProvider router={routes}/>
    </div>
  </React.StrictMode>,
)

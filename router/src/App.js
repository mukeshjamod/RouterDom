import {createBrowserRouter, 
  //createRoutesFromElements, 
  //Route, 
  RouterProvider} from 'react-router-dom';
import HomePages from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPages from './pages/Error';
import ProductDetail from './pages/ProductDetail';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePages/>}></Route>
//     <Route path='/products' element={<Products/>}/>
//   </Route>
// );

//  const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    errorElement:<ErrorPages/>,
    children:[

      {index: true, path:'', element:<HomePages/>},
      {path:'products', element:<Products/>},
      {path:'products/:productId', element:<ProductDetail/>}
    ],
  },
]);

function App() {
  return (
   
  <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;

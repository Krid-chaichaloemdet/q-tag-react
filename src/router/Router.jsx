import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>HEADER</h1>
        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <h1>HOME</h1> },
      { path: "/login", element: <h1>login</h1> },
      { path: "/register", element: <h1>register</h1> },
    ],
  },
  {
    path: '/createOrder',
    element: (
        <> <h1>CREATE ORDER PAGE</h1>
               <Outlet />
        </>
 
    ),
    children: [
        {path: '/createOrder', element: <h1>create order outlet</h1>},
        {path: '/paymentOrder', element: <h1>payment Order outlet</h1>}
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router}> </RouterProvider>;
}

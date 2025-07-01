import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter( /* application routes are defined here */ );

export default function App () {
  return (
    <RouterProvider router={ router } />
  );
}


createBrowserRouter will define a router that prevents URL changes from causing the page to reload. Instead, 
URL changes will allow the router to determine which of its defined routes to render while passing along information about the current URL’s path as
props
. We make our router available application-wide by providing it using RouterProviderat the root of our application.
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Loginpage from "./page/Loginpage";
import Signuppage from "./page/SIgnUp";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "/signup",
    element: <Signuppage />,
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Loginpage from "./page/Loginpage";
import Signuppage from "./page/SIgnUp";
import { Provider } from "react-redux";
import store from './redux/store'
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
    <Provider store={store}>
      <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
    </Provider>
    
  );
}

export default App;

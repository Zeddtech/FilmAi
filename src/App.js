import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loginpage from './page/Loginpage';
const route= createBrowserRouter([
  {
    path:'/',
    element:<Loginpage/>
  }
])





function App() {
  return (
    <div className="App">
     <RouterProvider router={route}>
      
     </RouterProvider>
    </div>
  );
}

export default App;

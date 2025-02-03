import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { removeUser, setUser } from "./utils/redux/userSlice";
import { auth } from "./utils/firebase";
import Loading from "./components/Loading";
import PageRoutes from "./utils/route";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const formattedUser = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        dispatch(setUser(formattedUser));
      } else {
        dispatch(removeUser());
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App bg-[#1e1e1e] h-full min-w-[348px] ">
      <RouterProvider router={PageRoutes} />
    </div>
  );
}

export default App;

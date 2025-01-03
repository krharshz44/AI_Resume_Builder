import './App.css'
import { useState } from "react";
import { Navigate, Outlet } from "react-router";
import Headers from './components/custom/Headers.jsx';
import { useUser } from '@clerk/clerk-react';


function App() {
  const [count, setCount] = useState(0)
  const {user,isLoaded,isSignedIn}=useUser();

  if(!isSignedIn&&isLoaded)
  {
    return <Navigate to={'/auth/sign-in'} />
  }

  return (
    <>
      <Headers/>
      <Outlet/>
      

    </>
  )
}

export default App

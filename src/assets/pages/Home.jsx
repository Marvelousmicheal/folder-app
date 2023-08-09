import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UseUserAuth } from '../../context/AuthContext'
import Sidebar from '../components/Sidebar'
function Home() {
  const {user, logout}=UseUserAuth()
  const navigate = useNavigate()
  async function handleLogout(){
try {
  await logout()
    navigate("/login");
} catch (error) {
  console.log(error.message)
}
  }
  console.log(user)
  return (
    <>
      <div className="bg-yellow-100 w-screen h-screen">
        <Sidebar />
        <div>Home {user && user.email}</div>
        <button onClick={handleLogout}>log out</button>
      </div>
    </>
  );
}

export default Home
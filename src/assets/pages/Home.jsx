import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseUserAuth } from "../../context/AuthContext";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import FolderSection from "../components/FolderSection";
import FIleSection from "../components/file/FIleSection";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "../../firebase";
function Home() {
  const { user, logout } = UseUserAuth();
  const navigate = useNavigate();
  const db= getFirestore(app)
  const [FolderList, setFolderList]= useState()
  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  }
  if(user){getFolderList()}
  async function getFolderList(){
const q = query(collection(db, "Folder"), where("createBy", "==", user.email));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
  }
  return (
    <>
      <div className="bg-yellow-50 w-full flex">
        <div>
          <Sidebar />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="col-span-2 mt-6 mx-5">
            <SearchBar/>
            <FolderSection/>
            <FIleSection/>
          </div>
          <div className="bg-white">
          storage
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
  // <div>Home {user && user.email}</div>
  //           <button onClick={handleLogout}>log out</button>
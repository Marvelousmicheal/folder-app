import React, { useState } from 'react'
import app from '../../firebase';
import { getFirestore } from "firebase/firestore";
import { UseUserAuth } from '../../context/AuthContext';
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";



function CreateFolder() {
const db = getFirestore(app);
const did = Date.now().toString()
const { user } = UseUserAuth();

  const [foldername, setfoldername]=useState()
 async function create(){
  
    try {
      await setDoc(doc(db, "Folder", did), {
        name: foldername,
        id: did,
        createBy: user.email,
      });
      toast.success('Folder has been successfully created');
    } catch (error) {
      toast.error("folder has been unsuccessfully created")
    }
  }
  
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Create A New Folder</h3>

          <div className="flex flex-col w-full justify-center items-center mt-6">
            <img src="/folder.webp" alt="folder icon" width="140px" />
            <input
              type="text"
              placeholder="Name of Folder"
              className="border-yellow-300 border w-full rounded py-2 my-4 pl-3"
              onChange={(e) => {
                setfoldername(e.target.value);
              }}
            />
            <button
              className="bg-yellow-500 w-full rounded py-2 text-white text-xl font-bold"
              onClick={create}
            >
              create Folder
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default CreateFolder
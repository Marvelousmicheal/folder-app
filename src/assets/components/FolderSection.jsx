import React from 'react'
import FolderItem from './FolderItem'

function FolderSection() {
const Folders =[
    {
        id:1,
        name:"floating berries"
    },
    {
        id:2,
        name:"cassava flakes"
    },
    {
        id:3,
        name:"sweeter"
    },
    {
        id:4,
        name:"latcose amironoma"
    },
    {
        id:5,
        name:"hyderate"
    },
]

  return (
    <>
      <div className="p-5 mt-5 bg-white rounded-lg flex justify-between font-semibold">
        <h2 className="text-[18px] font-bold">Recent Folders</h2>
        <p className="text-blue-500"> View All</p>
      </div>
      <div className="flex flex-wrap w-full bg-white mt-3 p-6">
        {Folders.map((folder) => (
          <FolderItem folder={folder} key={folder.id} />
        ))}
      </div>
    </>
  );
}

export default FolderSection
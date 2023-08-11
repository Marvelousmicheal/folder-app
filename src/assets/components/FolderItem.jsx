import React from 'react'

function FolderItem({folder}) {
  return (
    <>
      <div
        className=" h-[150px] border-[1px] flex justify-center items-center flex-col rounded mr-[5px] mb-[1rem]   hover:scale-105 hover:shadow-md
    cursor-pointer px-3"
      >
        <img src="/folder.webp" alt="folder" className="w-[140px] " />
        <h5 className="text-center font-medium capitalize">{folder.name}</h5>
      </div>
    </>
  );
}

export default FolderItem
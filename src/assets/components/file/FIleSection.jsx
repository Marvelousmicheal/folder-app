import React from 'react'
import FileItems from './FileItems';

function FIleSection() {

    const files=[
        {
            id:1,
            name:"Data Analysis.pdf",
            type:"pdf",
            size:"940kb",
            modifiedAt:" Nov 23,2023",
        },
        {
            id:2,
            name:"Data Science.pdf",
            type:"pdf",
            size:"940kb",
            modifiedAt:" Nov 23,2023",
        },
        {
            id:3,
            name:"Garri Processes.pdf",
            type:"pdf",
            size:"940kb",
            modifiedAt:" Nov 23,2023",
        },
        {
            id:4,
            name:"Best Ways to drink garri.pdf",
            type:"pdf",
            size:"940kb",
            modifiedAt:" Nov 23,2023",
        },
    ]
  return (
    <>
      <div>
        <div className="bg-white mt-5 p-5 rounded-lg">
          <h2 className="text-[18px] font-bold">Recent Files</h2>
        </div>
        <div
          className="grid grid-cols-1
        md:grid-cols-2 
        text-[13px] 
        font-semibold
        border-b-[1px]
        pt-2 px-3
        pb-2 mt-3
        border-gray-400
         text-black bg-white"
        >
          <h2>Name</h2>
          <div className="grid grid-cols-3">
            <h2>Modified</h2>
            <h2>Size</h2>
            <h2></h2>
          </div>
        </div>

        <div>
            {files.map((file)=>(
                <FileItems file={file} key={file.id}/>
            ))}
        </div>
      </div>
    </>
  );
}

export default FIleSection
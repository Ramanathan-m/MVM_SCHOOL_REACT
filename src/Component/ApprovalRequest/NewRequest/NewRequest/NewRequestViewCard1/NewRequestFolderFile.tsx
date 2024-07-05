import React from 'react'
import { H5, UL, LI, H6, P } from '../../../../../AbstractElements'
import { FileProps } from '../../../../../Types/Application/FileSideBar/FileSideBar'
import { MyFolderFiles } from '../../../../../Data/Miscellaneous/JobSearch/JobSearch'
import { Link } from 'react-router-dom'
    


const NewRequestFolderFile = () => {
  return (
    <>
      <UL className="d-flex flex-row simple-list ">
        {MyFolderFiles.map((data,i) => (
          <LI className="folder-box d-flex align-items-center" key={i}>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 folder-files">
                <i className={`f-20 fa fa-${data.icons} font-${data.color}`} />
              </div>
            <Link to="pdf/sample.pdf" target="_blank" download>
              <div className="flex-grow-1 ms-3">
                <H6>{data.title}</H6>
                <P>{data.details}</P>
                <P>{data.vendors}</P>
              </div>
                </Link>
            </div>
          </LI>
        ))}
      </UL>
    </>  )
}

export default NewRequestFolderFile
import React from 'react'
import { TableActionType } from '../../../../../Types/ApprovalRequest/Request'
import { Href } from '../../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { UL } from '../../../../../AbstractElements'
import { TagsConfigurationTableColumnTypes } from '../../../../../Types/Tables/Masters/Schools'

export const TagsTableData = [
    {
        id:1,
        name:"Grish",
        schoolName:"Tenkasi",
        department:"Transport",
        emailId:"grish@gmail.com",
        PhoneNumber:987654325,
        action:"test"
    },
]

const TableAction = ({id}: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
    <div className="info">
      <Link to={`${process.env.PUBLIC_URL}/masters/tags/Viewtags`}>
        <i className="fa fa-eye"></i>
      </Link>
      </div>
      <div className="edit">
      <Link to={`${process.env.PUBLIC_URL}/masters/tags/edittagsform`}>
        <i className="icon-pencil-alt" />
      </Link>
      </div>
      
      <div className="delete">
        <Link to={Href}>
          <i className="icon-trash" />
        </Link>
      </div>
     
  </UL>
  )
}


export const TagsConfigurationColumn = [
  {
    name:"Name",
    selector: (row: TagsConfigurationTableColumnTypes) => row["name"],
    sortable: true,
  },
  {
    name:"School Name",
    selector: (row: TagsConfigurationTableColumnTypes) => `${row.schoolName}`,
    sortable: true,
  },
  {
    name:"Department",
    selector: (row: TagsConfigurationTableColumnTypes) => `${row.department}`,
    sortable: true,
  },
  {
    name:"Email Id",
    selector: (row: TagsConfigurationTableColumnTypes) => `${row.emailId}`,
    sortable: true,
  },
  {
    name:"Phone Number",
    selector: (row: TagsConfigurationTableColumnTypes) =>`${row.PhoneNumber}`,
    sortable: true,
  },
  {
    name:"Action",
    cell: (row: TagsConfigurationTableColumnTypes) => <TableAction id = {row.action}/>,
    sortable: true,
  },
]
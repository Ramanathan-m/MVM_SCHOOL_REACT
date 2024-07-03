import { Link } from "react-router-dom";
import { LI, UL } from "../../../../../AbstractElements";
import { Href } from "../../../../../utils/Constant";
import { TableActionType, NewRequestConfigurationTableColumnsType, OldRequestConfigurationTableColumnsType } from "../../../../../Types/ApprovalRequest/Request";


export const OldRequestTableData = [
  {
    id:1,
    name: "Girish",
    emailId: "girish@gmail.com",
    phoneNumber: 8875362510,
    status: "Active",
    action: "test "
  },
  {
    id:2,
    name: "Manish",
    emailId: "manish@gmail.com",
    phoneNumber: 9840521360,
    status: "Inactive",
    action: "test "
  },
  {
    id:3,
    name: "Tony",
    emailId: "tony@gmail.com",
    phoneNumber: 7705309875,
    status: "Active",
    action: "test "
  },
  {
    id:4,
    name: "Jairish",
    emailId: "jairish@gmail.com",
    phoneNumber: 6840975425,
    status: "Inactive",
    action: "test "
  },
  {
    id:5,
    name: "Vasanth",
    emailId: "vasanth@gmail.com",
    phoneNumber: 9840578620,
    status: "Inactive",
    action: "test "
  }
];

const Tableaction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <LI className="edit">
        <Link to={Href}>
          <i className="icon-pencil-alt" />
        </Link>
      </LI>
      <LI className="delete">
        <Link to={Href}>
          <i className="icon-trash" />
        </Link>
      </LI>
    </UL>
  );
};

export const OldRequestConfigurationColumn = [
  {
    name: "Name",
    selector: (row: OldRequestConfigurationTableColumnsType) => row["name"],
    sortable: true,
  },
  {
    name: "Email Id",
    selector: (row: OldRequestConfigurationTableColumnsType) => `${row.emailId}`,
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row: OldRequestConfigurationTableColumnsType) => `${row.phoneNumber}`,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: OldRequestConfigurationTableColumnsType) => `${row.status}`,
    sortable: true,
  },
  {
    name: "action",
    cell: (row: OldRequestConfigurationTableColumnsType) => <Tableaction id={row.action} />,
    sortable: true,
  },
];
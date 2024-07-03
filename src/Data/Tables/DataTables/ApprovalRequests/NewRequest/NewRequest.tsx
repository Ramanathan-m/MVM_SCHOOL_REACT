import { Link } from "react-router-dom";
import { LI, UL } from "../../../../../AbstractElements";
import { Href } from "../../../../../utils/Constant";
import { TableActionType, NewRequestConfigurationTableColumnsType } from "../../../../../Types/ApprovalRequest/Request";


export const NewRequestTableData = [
  {
    id: 1,
    schoolName: "Avadi",
    departments: "Transport ",
    typeOfRequest: " Change Tire",
    description: "Lorem Ipsum ",
    priority: " Medium",
    requestedBy: "Venkat ",
    date: "15/05/2024 ",
    images: "image ",
    status: "Confirmed",
    action: "test ",
  },

  {
    id: 2,
    schoolName: "Chetpet",
    departments: "IT ",
    typeOfRequest: "Need Laptop",
    description: "Lorem Ipsum ",
    priority: "Low",
    requestedBy: "Lakshitha ",
    date: "13/05/2024 ",
    images: "- ",
    status: "Hold",
    action: "test ",
  },


  {
    id: 3,
    schoolName: "Polacherry",
    departments: "Hostel ",
    typeOfRequest: "Buy New fan",
    description: "Lorem Ipsum ",
    priority: "Medium",
    requestedBy: "Keerthana ",
    date: "08/05/2024",
    images: "images ",
    status: "Approved",
    action: "test ",
  },

  {
    id: 4,
    schoolName: "Polacherry",
    departments: "Hostel ",
    typeOfRequest: "Buy New fan",
    description: "Lorem Ipsum ",
    priority: "Medium",
    requestedBy: "Keerthana ",
    date: "08/05/2024",
    images: "images ",
    status: "Approved",
    action: "test ",
  },

  {
    id: 5,
    schoolName: "Chennai",
    departments: "IT",
    typeOfRequest: "Need Printer",
    description: "Lorem Ipsum ",
    priority: "High",
    requestedBy: "Ranjani",
    date: "04/05/2024",
    images: "images ",
    status: "Approved",
    action: "test ",
  },

  {
    id: 6,
    schoolName: "Avadi",
    departments: "Admin",
    typeOfRequest: "Entrance Arch",
    description: "Lorem Ipsum ",
    priority: "Low",
    requestedBy: "Ranjani",
    date: "02/05/2024",
    images: "-",
    status: "Forward to Architect",
    action: "test ",
  },
];

const Tableaction = ({ id }: TableActionType) => {
  return (
    <UL className="action simple-list flex-row" id={id}>
      <LI className="view">
          <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequest`}>
          <i className="fa fa-eye"></i>
        </Link>
      </LI>
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

export const NewRequestConfigurationColumn = [
  {
    name: "School Name",
    selector: (row: NewRequestConfigurationTableColumnsType) => row["schoolName"],
    sortable: true,
  },
  {
    name: "Departments",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.departments}`,
    sortable: true,
  },
  {
    name: "Type Of Request",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.typeOfRequest}`,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.description}`,
    sortable: true,
  },
  {
    name: "Priority",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.priority}`,
    sortable: true,
  },
  {
    name: "Requested By",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.requestedBy}`,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.date}`,
    sortable: true,
  },
  {
    name: "Image",
    selector: (row: NewRequestConfigurationTableColumnsType) => `${row.images}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: NewRequestConfigurationTableColumnsType) => <Tableaction id={row.action} />,
    sortable: true,
  },
];
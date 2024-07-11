import { MenuItem } from "../../Types/Layout/Sidebar";



export const MenuList: MenuItem[] = [
  {
    title: "General",
    lanClass: "lan-1",
    Items: [
      {
        title: "Dashboards",
        id: 1,
        icon: "home",
        lanClass: "lan-2",
        path: `${process.env.PUBLIC_URL}/dashboard/default`, 
        active:false,
      },

      {
        title: "Masters",
        id: 2,
        icon: "widget",
        type: "sub",
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/masters/schools`, title: "Schools", type: "link" },
          { path: `${process.env.PUBLIC_URL}/masters/departments`, title: "Departments", type: "link" },
          { path: `${process.env.PUBLIC_URL}/masters/vendors`, title: "Vendors", type: "link" },
          { path: `${process.env.PUBLIC_URL}/masters/links`, title: "Links", type: "link" },
          { path: `${process.env.PUBLIC_URL}/masters/tags`, title: "Tags", type: "link" },
        ]
      },
      
      {
        title: "Requests",
        id: 3,
        icon: "layout",
        type: "sub",
        active: false,
        children: [
          // { path: `${process.env.PUBLIC_URL}/approvalrequest/newrequests`, title: "Raise/View Requests", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/newrequests`, title: "New Requests", type: "link" },
          // { path: `${process.env.PUBLIC_URL}/approvalrequest/pendingrequests`, title: "Pending Requests", type: "link" },
          // { path: `${process.env.PUBLIC_URL}/approvalrequest/oldrequests`, title: "Old Requests", type: "link" },
          // { path: `${process.env.PUBLIC_URL}/approvalrequest/cancelledrequests`, title: "Cancelled Requests", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/schooladminapproved`, title: "school Admin Approved", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/newrequests`, title: "Pending Request", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/newrequests`, title: "Cancelled Request", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/quotedrequest`, title: "Quoted Request", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/committeememberapprovedpage`, title: "Committee Member Approved  ", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/inprogressrequest`, title: "Inprogress request", type: "link" },
          { path: `${process.env.PUBLIC_URL}/approvalrequest/completedrequest`, title: "Completed request", type: "link" },
        ]
      },
      { 
        id: 4,
        path: `${process.env.PUBLIC_URL}/user/users`, 
        icon: "user", 
        type: "sub", 
        active: false, 
        title: "Users" 
      },
      { 
        id: 5, 
        path: `${process.env.PUBLIC_URL}/profile/profile`, 
        icon: "support-tickets", 
        type: "sub", 
        active: false, 
        title: "Profile" 
      },
      { 
        id: 6, 
        path: `${process.env.PUBLIC_URL}/login`, 
        icon: "support-tickets", 
        type: "sub", 
        active: false, 
        title: "Logout" 
      },
    ],
  }
];
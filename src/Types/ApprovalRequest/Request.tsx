export interface TableActionType {
    id: string;
  }
  
  export interface NewRequestConfigurationTableColumnsType {
    id: number;
    schoolName:string;
    departments:string;
    typeOfRequest:string;
    description:string;
    priority:string;
    requestedBy:string;
    date: string;
    images:string; 
    status:string;
    action: string;
  }
  export interface PendingRequestConfigurationTableColumnsType {
    id: number;
    name:string;
    emailId:string;
    phoneNumber:number;
    status:string;
    action: string;
  }

  export interface OldRequestConfigurationTableColumnsType {
    id: number;
    name:string;
    emailId:string;
    phoneNumber:number;
    status:string;
    action: string;
  }
  export interface CancelledRequestConfigurationTableColumnsType {
    id: number;
    name:string;
    emailId:string;
    phoneNumber:number;
    status:string;
    action: string;
  }

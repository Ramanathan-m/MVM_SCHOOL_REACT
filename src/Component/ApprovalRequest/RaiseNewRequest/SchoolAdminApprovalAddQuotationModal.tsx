import React, { useState } from 'react'
import { Btn } from '../../../AbstractElements';
import CommonModal from '../../Ui-Kits/Modal/Common/CommonModal';
import SchoolAdminApprovalAddQuotationModalView from './SchoolAdminApprovalAddQuotationModalView';

const SchoolAdminApprovalAddQuotationModal = () => {
    const [largeScreen, setLargeScreen] = useState<boolean>(false);
    const largeScreenToggle = () => setLargeScreen(!largeScreen);
  return (
   
    <>
      <Btn color="info" onClick={largeScreenToggle} ><i className="fa fa-plus-circle"></i> {"Add Quotation"}</Btn>
      <CommonModal size="lg" isOpen={largeScreen} toggle={largeScreenToggle} sizeTitle="Add Quotation" modalBodyClassName="dark-modal">
        <SchoolAdminApprovalAddQuotationModalView />
      </CommonModal>
    </>    
    )
}

export default SchoolAdminApprovalAddQuotationModal
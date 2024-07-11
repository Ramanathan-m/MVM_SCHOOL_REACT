import React, { useState } from 'react'
import { Link } from 'react-feather';
import { Col, ModalFooter } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import { ChangePassword, Close, SaveChanges } from '../../../../../utils/Constant';
import CommonModal from '../../../../Ui-Kits/Modal/Common/CommonModal';
import NewRequestSelectQuoteModalView from './NewRequestSelectQuoteModalView';

const NewRequestSelectQuoteModal = () => {
    const [largeScreen, setLargeScreen] = useState<boolean>(false);
  const largeScreenToggle = () => setLargeScreen(!largeScreen);
  return (
    <>
      <Btn color="primary" onClick={largeScreenToggle} className='w-50'><i className="fa fa-check-circle"></i> {"Select"}</Btn>
      <CommonModal size="lg" isOpen={largeScreen} toggle={largeScreenToggle} sizeTitle="Select" modalBodyClassName="dark-modal">
        <NewRequestSelectQuoteModalView />
        <Col className='offset-sm-7 d-flex gap-1'>
            <Btn color="primary" onClick={largeScreenToggle}>{"Select this Quote"}</Btn>
            <Btn color="light" onClick={largeScreenToggle}>{"Cancel"}</Btn>
        </Col>
      </CommonModal>

    </>  )
}

export default NewRequestSelectQuoteModal
import React, { useState } from 'react'
import { ChangePassword, Close, SaveChanges } from '../../utils/Constant'
import CommonModal from '../Ui-Kits/Modal/Common/CommonModal'
import { Link } from 'react-router-dom'
import { ModalFooter } from 'reactstrap'
import { Btn } from '../../AbstractElements'
import ChangePasswordStaticForm from './ChangePasswordStaticForm'

const ChangePasswordModal = () => {
  const [largeScreen, setLargeScreen] = useState<boolean>(false);
  const largeScreenToggle = () => setLargeScreen(!largeScreen);
  return (
    <>
      <Link color="success" onClick={largeScreenToggle} to={''}>{ChangePassword}</Link>
      <CommonModal size="md" isOpen={largeScreen} toggle={largeScreenToggle} sizeTitle="Change Password" modalBodyClassName="dark-modal">
        <ChangePasswordStaticForm />
        <ModalFooter>
          <Btn color="secondary">{Close}</Btn>
          <Btn color="primary">{SaveChanges}</Btn>
        </ModalFooter>
      </CommonModal>
    </>
  )
}

export default ChangePasswordModal
import React from 'react'
import { Form, Row, Col } from 'reactstrap'
import SimpleCheckbox from '../../Forms/FormsControl/RadioCheckbox/BasicRadioAndCheckbox/SimpleCheckbox'
import DepartmentButtonSection from './DepartmentButtonSection'

const EditNewDepartmentForm = () => {
  return (
<Form className="theme-form">
      <Row>
        <Col md="8 offset-md-1">
          <div className="col-lg-9 col-md-12 mx-auto mt-3">
            <div className="form-group row">
              <label className="control-label col-sm-3">Departments</label>
              <div className="col-sm-9">
                <input type="text" name="name" className="form-control" value={"IT"}/>
              </div>
            </div>
            <Col className='mt-2'>
            <div className='mt-2'>
              <SimpleCheckbox/>
            </div> 
            </Col>
            <Col className='mt-2'>
            <div className="form-group row">
              <label className="control-label col-sm-3">Comments</label>
              <div className="col-sm-9">
                <textarea name="name" className="form-control" value={"Create Department and if any correction change hear! "} />
              </div>
            </div>  
            </Col> 
          </div>
        </Col>
      </Row>
      <Col className='mt-2'>
        <DepartmentButtonSection />
      </Col>
    </Form>  )
}

export default EditNewDepartmentForm
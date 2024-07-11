import React from 'react'
import { Form, Row, Col, FormGroup, Input, Label } from 'reactstrap'
import { Btn } from '../../../AbstractElements'
import { QuatationVendorName, QuatationPrice, QuatationProduct, Description, QuatationFile } from '../../../utils/Constant'
import ButtonSection from '../../Masters/SchoolCreate/SchoolButtonSection'
import { Quatationdropdown } from '../../../Data/Forms/FormsControl/BaseInput/BaseInput'

const SchoolAdminApprovalAddQuotationModalView = () => {
  return (
    <Form className="g-3">
    <Row>
        <Col sm="12">
        <div>
        <Form className="theme-form">
            <Row>
              <Col md="8 offset-md-1">
              <FormGroup>
                <Row>
                  <Col sm="4">
                    <Label>{QuatationVendorName}</Label>
                  </Col>
                  <Col sm="8">
                    <Input type='select' className="input-air-primary digits" defaultValue={"-Select Vendor-"}>
                      {Quatationdropdown.map((data, index) => (<option key={index}>{data}</option>))}
                    </Input>
                  </Col>
                </Row>
              </FormGroup>

              
                
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{QuatationPrice}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control"  />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{QuatationProduct}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="number" className="form-control" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{Description}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{"ETC"}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{QuatationFile}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="file" className="form-control" Value={"logo"}/>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
          </Form> 
      
    </div>
        </Col>
        <Col className='offset-sm-7 d-flex gap-1'>
            <Btn color="primary">{"Add"}</Btn>
            <Btn color="light">{"Cancel"}</Btn>
        </Col>
    </Row>
</Form>  )
}

export default SchoolAdminApprovalAddQuotationModalView
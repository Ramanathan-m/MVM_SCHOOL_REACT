import React from 'react'
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { VendorName, VendorContactPerson, VendorAddress, VendorState, VendorCity, VendorPincode, VendorEmailid, VendorFormPhoneNumber, VendorGstNumber, VendorPANNumber, VendorServices } from '../../../../utils/Constant'
import ButtonSection from '../../SchoolCreate/SchoolButtonSection'

const EditVendorForm = () => {
  return (
<Form className="theme-form">
            <Row>
              <Col md="8 offset-md-1">
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{VendorName}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" value={"Girish"}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{VendorContactPerson}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={"Sundar"} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{VendorAddress}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'43,VM Street'}/>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{VendorState}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'Tamil Nadu'}/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{VendorCity}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'Chennai'}/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{VendorPincode}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'6000017'}/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{VendorEmailid}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'Girish@gmail.com'}/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{VendorFormPhoneNumber}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'887762510'}/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{VendorGstNumber}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'07AABCU9355JIZW'}/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{VendorPANNumber}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'HJKIM5562W'}/>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="4">
                      <Label>{VendorServices}</Label>
                    </Col>
                    <Col sm="8">
                      <Input type="text" className="form-control" Value={'Hardware'}/>
                    </Col>
                  </Row>
                </FormGroup>
                
              </Col>
            </Row>
            <ButtonSection />
          </Form>  )
}

export default EditVendorForm
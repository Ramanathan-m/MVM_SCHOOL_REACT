import React, { useState } from 'react'
import { Col, Row, Badge, Media, Card, CardBody, Container, Collapse, Form, FormGroup, Input, Label } from 'reactstrap'
import { H4, P, Image, Btn } from '../../../AbstractElements'
import { dynamicImage } from '../../../Service'
import { Chetpet, Department, VRPriority, TypeOfRequest, Budget, DueDate, VRStatus, VRStatusWithDate, VRDescription, RequestedDescription, RequestedFile, RequestedPrice, RequestedProduct, RequestedVendorName } from '../../../utils/Constant'
import NewRequestCardImage from '../NewRequest/NewRequest/NewRequestViewCard/NewRequestCardImage'
import { Link } from 'react-router-dom'

const CommitteeMemberApprovedViewCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Col md="12" xl="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <Row className="g-3">
          <Col md="12" xl="6">
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">School Name</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Chetpet}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Department</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Department}</div>
            </div>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="12" xl="6">
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Category</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Transport"}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row mt-2 ">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Priority</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{VRPriority}</div>
            </div>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="12" xl="6">
            <div className="form-group row mt-2 ">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Request</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Bus Front Tyre Change"}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Approximate Budget</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">₹ {Budget}</div>
            </div>

          </Col>
        </Row>
        <Row className="g-3">
          <Col md="12" xl="6">
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Due Date</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{DueDate}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Last Updated Date</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"18-07-2024 11:30 PM"}</div>
            </div>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="12" xl="6">
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Last Updated By</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Committee Member"}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Image</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex gap-1">
                <NewRequestCardImage />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="12" xl="6">
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Created By</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Department}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Created Date</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"12-07-2024"}</div>
            </div>
          </Col>
        </Row>
        <Row className=" form-group row mt-2">
          <Col md="12" xl="6">
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Tags</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Transport"}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
            <div className="form-group row mt-2 ">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Status</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex gap-1">
                <Badge color="success">{"Committee Member Approved"}</Badge>
              </div>
            </div>
          </Col>
        </Row>

        <Col md="12" xl="12">
          <div className="form-group row mt-2">
            <label className="col-sm-6">Description</label>
            <div className="col-sm-10">{VRDescription}</div>
          </div>
        </Col>

      </div>

      <H4 className="text-success my-3">{"Add Quotation"}</H4>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <Row>
          <Col lg="12">
          <div className="col-lg-9 col-md-12 mx-auto mt-3">
            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Name</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{RequestedVendorName}
              </div>
            </div>
            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Email Id</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{RequestedPrice}
              </div>
            </div>
            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Product</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{RequestedProduct}
              </div>
            </div>

            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Description</label>
              <div className="col-xl-9 col-lg-6 col-md-6 col-sm-6 col-xs-12">{RequestedDescription}
              </div>
            </div>

            <div className="form-group row mt-3">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">File</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                {RequestedFile}
              </div>
            </div>
          </div>
          </Col>
        </Row>
        <Col className='offset-sm-9'>
        <Btn color='info' onClick={toggle}><i className="fa fa-upload"></i>  {"Upload Purchase Order"}</Btn>
        </Col>

        <Col md="12" sm="12">
        <CardBody>
          <P className="common-flex">
          </P>
          <Collapse isOpen={isOpen}>
            <Card className="light-accordion">
              <CardBody>
                <Form className="g-3">
                  <Row>
                    <Col sm="12">
                      <FormGroup>
                        <Label >{"Upload Purchase Order"}</Label>
                        <Input type="file" name="firstName" />
                      </FormGroup>
                    </Col>
                    <Col className='offset-sm-9 d-flex gap-1'>
                    <Link to={`${process.env.PUBLIC_URL}/approvalrequest/committeememberapprovedviewcard`}>
                      <Btn color="primary" onClick={toggle}>{"Upload"}</Btn>
                      </Link>
                      <Btn color="light" onClick={toggle}>{"Cancel"}</Btn>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Col>

      </div>


      <Row>
        <Col>
          <H4 className="text-success my-3">{"History"}</H4>
        </Col>
        <Col className='offset-sm-7 mt-2'>
          {/* <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestquotation`}>
            <Btn color="info">{"Add Quotation"}</Btn>
          </Link> */}
        </Col>
      </Row>

      <div className="card-wrapper border rounded-3 checkbox-checked">
        <Row>
        <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-info">Ranjith</H4>
                <P>Committee Member3: Request Approved</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>19-07-2024 7:30 PM</span>
            </div>
          </Col>
        <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-info">Reema</H4>
                <P>Committee Member2: Request Approved</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>18-07-2024 11:30 PM</span>
            </div>
          </Col>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-info">Kumar</H4>
                <P>Committee Member1: Request Approved</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>18-07-2024 1:30 PM</span>
            </div>
          </Col>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-success">Suresh</H4>
                <P>School Admin: Request Approved</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>17-07-2024 1:30 PM</span>
            </div>
          </Col>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-warning">Shankar</H4>
                <P>Transport Head: Need 8 inch tyre</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>17-07-2024 11:30 PM</span>
            </div>
          </Col>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-success">Suresh</H4>
                <P>School Admin Requestd More Info</P>
                <P>Please mention the tyre details</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>16-07-2024 1:30 PM</span>
            </div>
          </Col>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-warning">Shankar</H4>
                <P>Transport Head: Edited a Request </P>
                <P>Bus Front tyre Change</P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>18-07-2024 7:30 PM</span>
            </div>
          </Col>
          <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-success">Shankar</H4>
                <P>Transport Head: Created a Request </P>
              </Media>
            </Media>
          </Col>
          <Col md="6">
            <div className="text-md-end mt-4" id="project">
              <span>15-07-2024 3:30 PM</span>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default CommitteeMemberApprovedViewCard



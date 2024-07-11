import React, { useState } from 'react'
import { Badge, Card, CardBody, Col, Collapse, Form, FormGroup, Input, Label, Media, Row } from 'reactstrap'
import { Btn, H4, P, Image, H6, UL } from '../../../../../AbstractElements'
import { Chetpet, Department, Budget, TypeOfRequest, DueDate, VRPriority, Href, VRDescription, ProjectDescription } from '../../../../../utils/Constant'
import NewRequestCardImage from '../NewRequestViewCard/NewRequestCardImage'
import { dynamicImage } from '../../../../../Service'
import { Link } from 'react-router-dom'
import NewRequestSelectQuoteModal from './NewRequestSelectQuoteModal'
import NewRequestSelectQuoteModalView from './NewRequestSelectQuoteModalView'


const NewRequestQuotation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
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
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"17-07-2024 1:30 PM"}</div>
              </div>
            </Col>
          </Row>
          <Row className="g-3">
            <Col md="12" xl="6">
              <div className="form-group row mt-2">
                <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Last Updated By</label>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"AO"}</div>
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
                <Badge color="success">{"Quotation Uploaded"}</Badge>
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
      </Col>
      <H4 className="text-success my-3">{"Quotation Details"}</H4>
      <div className="card-wrapper border rounded-3 checkbox-checked">
      <table className="table mt-2 ">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Vendor</th>
            <th scope="col">Amount</th>
            <th scope="col" className='w-25'>Description</th>
            <th scope="col" className='w-25'>ETC</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Apollo Tyre</td>
            <td>15,000</td>
            <td>Apollo bus tires are available in various sizes to fit different types of buses, from city buses to coaches and long-haul buses.</td>
            <td>12-07-2024</td>
            <td className=''>
              <UL className="action simple-list flex-row gap-3">
                <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestviewquotation`}>{"View"}</Link>
                {/* <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequesteditform`}>{"Select"}</Link>
                  <Link to={Href}>{"Requote"}</Link>
                  <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequestviewcard`}>{"Cancel"}</Link> */}
              </UL>
            </td>
          </tr>
          <tr>
          </tr>
          <tr>
            <td>2</td>
            <td>MRF Tyres</td>
            <td>20,000</td>
            <td>MRF bus tires come in various sizes to fit different types of buses, including city buses, coaches, and long-haul buses.</td>
            <td>13-07-2024</td>
            <td className=''>
              <UL className="action simple-list flex-row gap-3">
                <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestviewquotation`}>{"View"}</Link>
                {/* <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequesteditform`}>{"Select"}</Link>
                  <Link to={Href}>{"Requote"}</Link>
                  <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequestviewcard`}>{"Cancel"}</Link> */}
              </UL>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>JK Tyre</td>
            <td>25,000</td>
            <td>JK Tyre offers a range of sizes suitable for various types of buses, including city buses, coaches, and long-haul buses.</td>
            <td>11-07-2024</td>
            <td>
              <UL className="action simple-list flex-row gap-3">
                <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequestviewquotation`}>{"View"}</Link>
                {/* <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequesteditform`}>{"Select"}</Link>
                  <Link to={Href}>{"Requote"}</Link>
                  <Link to={`${process.env.PUBLIC_URL}/approvalrequest/pendingrequestviewcard`}>{"Cancel"}</Link> */}
              </UL>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className='d-flex gap-3 mt-3 ms-5 '>
      <Btn className='btn-success'>Approve</Btn>
      <Btn className='btn-info'>Need More Info</Btn>
      <Btn className='btn-warning'>Hold</Btn>
      <Btn className='btn-danger'>Cancel</Btn>

    </div>

      <H4 className="text-success my-3">{"Approval Status"}</H4>
      <div className="card-wrapper border rounded-3 checkbox-checked">
      </div>
      
      <H4 className="text-success my-3">{"History"}</H4>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <Row>
        <Col md="6" className='mt-2'>
            <Media>
              <div className="media-left">
                <Image className="media-object rounded-circle img-50" src={dynamicImage("user/user.png")} alt="user" />
              </div>
              <Media body className="m-l-20">
                <H4 className="media-heading text-warning">Ramesh</H4>
                <P>AO: Quoted</P>
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


    </>




  )
}

export default NewRequestQuotation
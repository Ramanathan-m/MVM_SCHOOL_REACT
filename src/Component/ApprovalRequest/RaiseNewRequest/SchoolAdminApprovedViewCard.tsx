import React from 'react'
import { Col, Row, Badge, Media } from 'reactstrap'
import { H4, P, Image, Btn } from '../../../AbstractElements'
import { dynamicImage } from '../../../Service'
import { Chetpet, Department, VRPriority, TypeOfRequest, Budget, DueDate, VRStatus, VRStatusWithDate, VRDescription } from '../../../utils/Constant'
import NewRequestCardImage from '../NewRequest/NewRequest/NewRequestViewCard/NewRequestCardImage'
import { Link } from 'react-router-dom'
import SchoolAdminApprovalAddQuotationModal from './SchoolAdminApprovalAddQuotationModal'

const SchoolAdminApprovedViewCard = () => {
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
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"12-07-2024"}</div>
            </div>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="12" xl="6">
            <div className="form-group row mt-2">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Last Updated By</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"School Admin"}</div>
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
          {/* <Col md="12" xl="6">
            <div className="form-group row mt-2 ">
              <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Status</label>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex gap-1">
                <Badge color="secondary">{VRStatus}<br />{VRStatusWithDate}</Badge>
              </div>
            </div>
          </Col> */}
        </Row>

        <Col md="12" xl="12">
          <div className="form-group row mt-2">
            <label className="col-sm-6">Description</label>
            <div className="col-sm-10">{VRDescription}</div>
          </div>
        </Col>

      </div>
      <Row>
        <Col>
          <H4 className="text-success my-3">{"Add Quotation"}</H4>
        </Col>
        <Col className='text-end mt-2'>
          <SchoolAdminApprovalAddQuotationModal />  </Col>
      </Row>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <div className='row'>
          <Col sm="3">
            Quotation1:<input type="text" />
          </Col>
          <Col sm="3">
            Quotation2:<input type="text" />
          </Col>
          <Col sm="3">
            Quotation 3:<input type="text" />
          </Col>
          <Col className='text-end'>
            <Link to={`${process.env.PUBLIC_URL}/approvalrequest/quotedrequest`}>
              <Btn color="success">{"Submit"}</Btn>
            </Link>
          </Col>
        </div>
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

export default SchoolAdminApprovedViewCard
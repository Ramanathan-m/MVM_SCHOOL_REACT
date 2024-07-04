import React from 'react'
import { Col,Row } from 'reactstrap'
import { Btn, H6 } from '../../../../../AbstractElements'
import { Chetpet, Department, Budget, TypeOfRequest, DueDate, VRPriority, ImageGallery, VRDescription, VRStatus, Href } from '../../../../../utils/Constant'
import NewRequestCardImage from './NewRequestCardImage'

const NewRequestDetail = () => {
  return (
    <Col md="12" xl="12">
    <div className="card-wrapper border rounded-3 checkbox-checked">
      <H6 className="sub-title">{"View Details"}</H6>
      
        <Row className="g-3 mt-3">
          <Col md="12" xl="6">
          <div className="form-group row">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">School Name</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Chetpet}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
          <div className="form-group row">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Department</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Department}</div>
            </div>
          </Col>
        </Row>

        <Row className="g-3">
          <Col md="12" xl="6">
          <div className="form-group row mt-3">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12"> Budget</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{Budget}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
          <div className="form-group row mt-3">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Request</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{TypeOfRequest}</div>
            </div>
          </Col>
        </Row>

        <Row className="g-3">
          <Col md="12" xl="6">
          <div className="form-group row mt-3">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Due Date</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{DueDate}</div>
            </div>
          </Col>
          <Col md="12" xl="6">
          <div className="form-group row mt-3">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Priority</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{VRPriority}</div>
            </div>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md="12" xl="6">
          <div className="form-group row mt-3">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Image</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12 d-flex ms-1">
              <NewRequestCardImage/>
            </div>
            </div>
          </Col>
          <Col md="12" xl="6">
          <div className="form-group row mt-3">
            <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Status</label>
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Btn color="secondary" href={Href}>{VRStatus}</Btn>
              </div>
            </div>
          </Col>
          </Row>
          
          <Col md="12" xl="12">
          <div className="form-group row mt-3">
            <label className="col-sm-2">Description</label>
            <div className="col-sm-10">{VRDescription}</div>
            </div>
          </Col>
        </div>
   
     
  </Col>  )
}

export default NewRequestDetail
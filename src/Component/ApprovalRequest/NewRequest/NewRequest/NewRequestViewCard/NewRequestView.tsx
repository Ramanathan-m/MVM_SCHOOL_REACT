import React from 'react'
import {  Row, Col, Card, CardBody } from 'reactstrap'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import NewRequestDetail from './NewRequestDetail'
import NewRequestApproval from './NewRequestApproval'
import NewRequestApproval1 from '../NewRequestViewCard1/NewRequestApproval1'

const NewRequestView = () => {
    return (
        <Col sm="12">
          <Card>
            <CommonCardHeader title={"View Request"}  />
            <CardBody>
              <Row className="g-3">
              <NewRequestDetail/>
              <NewRequestApproval1/>
              </Row>
            </CardBody>
          </Card>
        </Col>
      )
}

export default NewRequestView
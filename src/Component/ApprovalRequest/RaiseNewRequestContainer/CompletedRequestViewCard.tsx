import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import CompletedRequestViewCard from '../RaiseNewRequest/CompletedRequestViewCard'

const CompletedRequestViewCardContainer = () => {
  return (
    <><Breadcrumbs mainTitle={"School Admin Approved"} parent={"New Request"} /><Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <CompletedRequestViewCard />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container></>
  )
}

export default CompletedRequestViewCardContainer
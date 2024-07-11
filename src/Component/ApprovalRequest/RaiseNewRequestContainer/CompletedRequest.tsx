import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import CompletedRequest from '../RaiseNewRequest/CompletedRequest'

const CompletdRequestContainer = () => {
  return (
    <><Breadcrumbs mainTitle={"School Admin Approved"} parent={"New Request"} /><Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <CompletedRequest />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container></>
  )
}

export default CompletdRequestContainer
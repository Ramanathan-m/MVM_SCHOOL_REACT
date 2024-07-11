import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import QuotedRequest from '../RaiseNewRequest/QuotedRequest'

const QuotedRequestContainer = () => {
  return (
    <><Breadcrumbs mainTitle={"School Admin Approved"} parent={"New Request"} /><Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <QuotedRequest />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container></>
  )
}

export default QuotedRequestContainer
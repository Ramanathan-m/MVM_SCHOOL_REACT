import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import SchoolAdminApprovedViewCard from '../RaiseNewRequest/SchoolAdminApprovedViewCard'

const SchoolAdminApprovedViewCardContainer = () => {
  return (
    <><Breadcrumbs mainTitle={"School Admin Approved"} parent={"New Request"} /><Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <SchoolAdminApprovedViewCard />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container></>
  )
}

export default SchoolAdminApprovedViewCardContainer
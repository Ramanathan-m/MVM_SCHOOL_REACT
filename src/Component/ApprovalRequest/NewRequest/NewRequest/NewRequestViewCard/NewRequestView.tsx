import React from 'react'
import { Row, Col, Card, CardBody, Container } from 'reactstrap'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import NewRequestDetail from './NewRequestDetail'
import NewRequestApproval from './NewRequestApproval'
import InvoiceNumber from '../../../../Application/Ecommerce/Invoices/Invoice-5/InvoiceNumber'
import UserDetails from '../../../../Application/Ecommerce/Invoices/Invoice-6/UserDetails'
import NewRequestApproval1 from '../NewRequestViewCard1/NewRequestApproval1'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ProjectCreates, Project } from '../../../../../utils/Constant'

const NewRequestView = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectCreates} parent={Project} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row className="g-3">
                  <NewRequestDetail />
                  {/* <NewRequestApproval/> */}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NewRequestView
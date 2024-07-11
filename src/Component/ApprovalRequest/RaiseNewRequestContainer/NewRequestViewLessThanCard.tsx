import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import NewRequestViewLessThanCard from '../RaiseNewRequest/NewRequestViewLessThanCard'

const NewRequestLessThanViewCardContainer= () => {
    return (
        <>
            <Breadcrumbs mainTitle={"Edit Form"} parent={"New Request"} />
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <NewRequestViewLessThanCard />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NewRequestLessThanViewCardContainer
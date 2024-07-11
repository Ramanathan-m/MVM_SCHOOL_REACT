import React from 'react'
import { Link } from 'react-feather'
import { Row, Col } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Add, Cancel } from '../../../../utils/Constant'

const TagsButtonSection = () => {
  return (
    <Row className="justify-content-center">
    <Col md="6" className="d-flex flex-column col-md-6 ms-5 ">
      <div className="text-end offset-sm-1">
      <Link to={`${process.env.PUBLIC_URL}/masters/tag`}>
        <Btn color="primary" className="me-3">{Add}</Btn>
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/masters/tag`}>
          <Btn color="light">{Cancel}</Btn>
        </Link>
      </div>
    </Col>
  </Row>  )
}

export default TagsButtonSection
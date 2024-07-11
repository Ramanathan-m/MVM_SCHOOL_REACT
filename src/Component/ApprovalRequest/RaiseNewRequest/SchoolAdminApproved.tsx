import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, Row } from 'reactstrap'
import { Image } from '../../../AbstractElements'

const SchoolAdminApproved = () => {
    
  return (
    <Col lg="12">
    <Card>
        {/* <CommonCardHeader title={BreckpointSpecifics} span={breakPointData}/> */}
        <Row className="card-block">
            <Col sm="12" lg="12" xl="12">
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">School</th>
                            <th scope="col">Department</th>
                            <th scope="col">Category</th>
                            <th scope="col">Budget</th>
                            <th scope="col">Request</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Tags</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Chetpet</td>
                        <td>Transport</td>
                        <td>Transport</td>
                        <td>₹17,000</td>
                        <td>Bus tyre Change</td>
                        <td>Medium</td>
                        <td>Transport</td>
                        <td><Image src="../assets/images/other-images/tyre-img-1.jpeg" alt="Example Image" className='w-25'/></td>
                        <td> <Link to={`${process.env.PUBLIC_URL}/approvalrequest/SchoolAdminApprovedViewCard`}><i className="fa fa-eye"></i></Link>
                            <span>  </span>
                            {/* <Link to={`${process.env.PUBLIC_URL}/approvalrequest/viewrequesteditform`}><i className="fa fa-edit"></i></Link> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
    </Card>
</Col>  )
}

export default SchoolAdminApproved
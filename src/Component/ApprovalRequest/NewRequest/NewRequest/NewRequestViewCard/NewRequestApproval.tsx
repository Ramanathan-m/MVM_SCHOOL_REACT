import React from 'react'
import { Col, Media,} from 'reactstrap'
import { H6, P,Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'

const NewRequestApproval = () => {
  return (
    <Col md="12" xl="12">
    <div className="card-wrapper border rounded-3 checkbox-checked">
      <H6 className="sub-title">{"Approval History"}</H6>
      <div className="form-check-size mt-4">
        <div className="">
        <Media>
          <div className="media-size-email">
            <Image className="me-3 rounded-circle" src={dynamicImage("user/user.png")} alt="user" />
          </div>
          <Media body>
            <H6 className="f-w-600 ">{'SANKAR'}</H6>
            <P>{'Principal'}</P>
            <P className="txt-success">{'Approved'}</P>
            <P>{'Approved On : 18/07/2024 04:30 PM'}</P>
            <P>{'Comments: Lorem ipsum'}</P>
          </Media>
        </Media>
        <Media className='mt-3'>
          <div className="media-size-email">
            <Image className="me-3 rounded-circle" src={dynamicImage("user/user.png")} alt="user" />
          </div>
          <Media body>
            <H6 className="f-w-600">{'AO'}</H6>
            <P></P>
            <P></P>
            <P>{'Upload Qoutes'}</P>
            <P>{'Comments: Lorem ipsum'}</P>
          </Media>
        </Media>            
        </div>
       
      </div>
    </div>
  </Col>  )
}

export default NewRequestApproval
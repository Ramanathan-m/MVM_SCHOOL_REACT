import React from 'react'
import { Row, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import { LinkDropdown } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'

const NewrequestUpoloadQuote = () => {
    return (
        <>
     <div className="card-wrapper border rounded-3 checkbox-checked">

        <Row>
            <Col sm="12">
            <Input type='select' className="input-air-primary digits" defaultValue={"Select School"}>
                  {LinkDropdown.map((data, index) => (<option key={index}>{data}</option>))}
                </Input>
            </Col>
            <Col sm-6>
                <div className="form-group row mt-2">
                    <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Vendor</label>
                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"Dell"}
                    </div>
                </div>
            </Col>
            <Col sm-6>
                <div className="form-group row mt-2">
                    <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Email Id</label>
                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"dell@support.co.in"}
                    </div>
                </div>
            </Col>
        </Row><Row>
                <Col sm-6>
                    <div className="form-group row mt-2">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Address</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"No.12, Anna Nagar, Chennai-28"}
                        </div>
                    </div>
                </Col>
                <Col sm-6>
                    <div className="form-group row mt-2">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">GST Number</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"29ABCDE1234F1Z5"}
                        </div>
                    </div>
                </Col>
            </Row><Row>
                <Col sm-6>
                    <div className="form-group row mt-2">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">Websit</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"https://www.dell.com/"}
                        </div>
                    </div>

                </Col>
                <Col sm-6>
                    <div className="form-group row mt-2">
                        <label className="control-label col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">PAN Number</label>
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">{"THNDH82388"}
                        </div>
                    </div>
                </Col>
            </Row>
            <Form className="g-3">
                <Row>
                    <Col sm="12">
                        <FormGroup>
                            <Label >{"upload"}</Label>
                            <Input type="file" name="firstName" />
                        </FormGroup>
                    </Col>
                    <Col sm="12">
                        <FormGroup>
                            <Label >{"Comments"}</Label>
                            <Input type="textarea" name="firstName" />
                        </FormGroup>
                    </Col>
                    <Col className='offset-sm-8 d-flex gap-1'>
                        <Btn color="primary">{"Submit Quote"}</Btn>
                        <Btn color="light">{"Cancel"}</Btn>
                    </Col>
                </Row>
            </Form>
</div>
        </>
    )
}

export default NewrequestUpoloadQuote
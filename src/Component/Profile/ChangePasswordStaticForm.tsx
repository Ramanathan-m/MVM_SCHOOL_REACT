import React from 'react'
import { ConfirmPassword, EnterConfrimPassword, EnterNewPassword, NewPassword, PasswordPlaceholder } from '../../utils/Constant'
import { Field, Formik } from 'formik'
import { Form, Row, Col, Label } from 'reactstrap'

const ChangePasswordStaticForm = () => {
    return (
        <Formik
        initialValues={{ oldPassword: "", newPassword: "" }}
        onSubmit={(value) => console.log(value)}
      >
        {() => (
        <Form>
            <Row className="g-3">
                <Col md="12">
                    <Label>{NewPassword}</Label>
                    <Field className="form-control" name="oldPassword" type="passwword" placeholder={EnterNewPassword} />
                </Col>
                <Col md="12">
                    <Label>{ConfirmPassword}</Label>
                    <Field className="form-control" name="newPassword" type="password" placeholder={EnterConfrimPassword} />
                </Col>
            </Row>
        </Form>
        )}
        </Formik>
    );
};

export default ChangePasswordStaticForm
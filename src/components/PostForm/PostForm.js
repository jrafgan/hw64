import React, {Component, Fragment} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class PostForm extends Component {
    render() {
        return (
            <Fragment>
                <h1>Add Post</h1>
                <Form>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" placeholder="Title"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" style={{height: '300px'}}/>
                    </FormGroup>
                    <Button>Add</Button>
                </Form>
            </Fragment>
        );
    }
}

export default PostForm;
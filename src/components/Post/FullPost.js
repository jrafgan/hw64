import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const FullPost = props => {
    return (
        <div>
            <Jumbotron>
                <h2 className="display-3">Title</h2>
                <hr className="my-2" />
                <p className="lead">Description</p>


            </Jumbotron>
            <p className="lead float-right">
                <Button color="primary">Edit Post</Button>
                <Button color="danger">Delete Post</Button>
            </p>
        </div>
    );
};

export default FullPost;
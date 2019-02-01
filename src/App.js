import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";

import Header from "./components/Header/Header";
import AddPost from "./containers/AddPost/AddPost";

import './App.css';
import PostList from "./containers/PostList/PostList";
import FullPost from "./components/Post/FullPost";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Container>
              <Switch>
                  <Route path="/" exact component={PostList}/>
                  <Route path="/posts/add" exact render={() => <AddPost />}/>
                  <Route path="/posts/:id"  render={() => <FullPost />}/>
                  <Route path="/about" exact render={() => <h1>About</h1>}/>
                  <Route path="/contact" exact component={FullPost}/>
              </Switch>

          </Container>
      </div>
    );
  }
}

export default App;

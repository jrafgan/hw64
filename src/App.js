import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";

import Header from "./components/Header/Header";
import AddPost from "./containers/AddPost/AddPost";
import PostList from "./containers/PostList/PostList";
import FullPost from "./components/Post/FullPost";
import EditPost from "./containers/EditPost/EditPost";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Container>
              <Switch>
                  <Route path="/" exact component={PostList}/>
                  <Route path="/posts" exact component={PostList}/>
                  <Route path="/posts/add" exact component={AddPost} />
                  <Route path="/posts/:id/edit" component={EditPost} />
                  <Route path="/posts/:id" exact component={FullPost} />}/>
                  <Route path="/about" exact component={About} />
                  <Route path="/contact" exact component={Contact} />
              </Switch>

          </Container>
      </div>
    );
  }
}

export default App;

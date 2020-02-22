import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListCourseComponent from './ListCourseComponent';
import CourseComponent from './CourseComponent';

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                <h1>Instructor Application</h1>
                <Switch>
                    <Route path="/" exact component={ListCourseComponent} />
                    <Route path="/courses" exact component={ListCourseComponent} />
                    <Route path="/courses/:id" component={CourseComponent} />
                </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp;
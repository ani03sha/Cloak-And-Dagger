import React, { Component } from 'react';
import CourseDataService from '../services/CourseDataService';

const INSTRUCTOR = 'RedQuark';

class ListCourseComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses()
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses(INSTRUCTOR)
                .then(
                    response => {
                        console.log(response)
                        this.setState({courses: response.data})
                    }
                )
    }

    render() {
        return(
            <div className='container'>
                <h3>All Courses</h3>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course => 
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.description}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCourseComponent;
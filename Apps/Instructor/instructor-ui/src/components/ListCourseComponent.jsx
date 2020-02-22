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

    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(INSTRUCTOR, id)
                    .then(
                        response => {
                            this.setState({message: `Delete of course ${id} is successful`})
                            this.refreshCourses()
                        }
                    )
        }

    render() {
        return(
            <div className='container'>
                <h3>All Courses</h3>
                {this.state.message && <div class='alert alert-success'>{this.state.message}</div>}
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course => 
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.description}</td>
                                            <td>
                                                <button className='btn btn-warning' onClick={() => this.deleteCourseClicked(course.id)}>Delete</button>
                                            </td>
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
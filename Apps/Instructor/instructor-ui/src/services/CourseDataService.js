import axios from 'axios';

const INSTRUCTOR = 'RedQuark';
const REST_API_URL = 'http://localhost:8080';
const INSTRUCTOR_API_URL = `${REST_API_URL}/instructors/${INSTRUCTOR}`;

class CourseDataService {
    
    retrieveAllCourses(name) {
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }

    deleteCourse(name, id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`)
    }
}

export default new CourseDataService();
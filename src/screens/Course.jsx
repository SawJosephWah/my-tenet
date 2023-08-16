import React from 'react'
import CourseCard from '../components/Course/CourseCard'
// import '../assets/css/course.css'
import { Outlet } from 'react-router-dom'

export default function Course() {
    return (
            <div className="courses">
                <div className="content-body-inner">
                    <div className="content-body-inner-title">
                        My Courses
                    </div>
                    <div className="content-body-inner-body">
                        <CourseCard></CourseCard>
                        <CourseCard></CourseCard>
                        <CourseCard></CourseCard>
                    </div>
                </div>
            </div>
    )
}

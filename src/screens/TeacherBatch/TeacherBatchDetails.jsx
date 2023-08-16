import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import StudentItem from './StudentItem';
import axios from 'axios';
import apiService from '../../components/common/ApiService';

export default function TeacherBatchDetails() {
    const { batch_id } = useParams();
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [batch, setBatch] = useState(null);
    useEffect(() => {
        fetchBatch();
    }, [])
    const backToCourse = () => {
        navigate(`/teacher-batch`);
    };

    const fetchTasks = async () => {
        try {
            const requestBody = {
                limit: 10,
                order: "desc",
                page: 1,
                batch_id: batch_id,
            };
            const taskRes = await apiService.post('/api/tasks', requestBody);
            const tasks = taskRes.data;
            if (tasks.status) {
                setTasks(tasks.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchBatch = async () => {
        try {
            const res = await apiService.get(`/api/batch/${batch_id}`);
            const batchRes = res.data;
            if (batchRes.status) {
                setBatch(batchRes.data);
                fetchTasks();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="teacher-course-card-details">
            <div className="content-body">
                <div className="content-body-inner">
                    <div className="content-body-inner-body">
                        <div className="mt-3 mb-2">
                            <i className="fa-solid fa-arrow-left fa-2xl back-arrow" onClick={() => { backToCourse() }}></i>
                        </div>
                        <div className="row d-flex align-items-center mb-3">
                            <div className="col-md-8 mb-2">
                                {batch && <div>
                                    <h6 className="title">{batch.course_name}</h6>
                                    <h6>Batch - {batch.batch_number}</h6>

                                    <p>{batch.course_description}</p>
                                </div>}

                            </div>
                            <div className="col-md-4">
                                <div className="img"></div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <span className="project-filter">Tasks</span>
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <span className="project-filter">
                                            Finished
                                        </span>
                                    </div>
                                </div>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-md-6">
                                        <span className="sort-btn"><i className="fa-solid fa-arrow-down-wide-short"></i>Sort</span>
                                    </div>
                                    <div className="col-md-6 text-end">
                                        <button className="btn btn-primary">
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <ProjectCard></ProjectCard>
                                <ProjectCard></ProjectCard>
                                <ProjectCard></ProjectCard>
                                <ProjectCard></ProjectCard> */}
                                {tasks.map((task, index) => (
                                    <ProjectCard key={index} task={task} />
                                ))}
                            </div>
                            <div className="col-md-5">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="students">
                                            <h6 className="title">Students</h6>
                                            <div className="student-items">
                                                <StudentItem></StudentItem>
                                                <StudentItem></StudentItem>
                                                <StudentItem></StudentItem>
                                                <StudentItem></StudentItem>
                                                <StudentItem></StudentItem>
                                                <StudentItem></StudentItem>
                                                <StudentItem></StudentItem>
                                                <StudentItem></StudentItem>
                                                <StudentItem></StudentItem>
                                                <StudentItem></StudentItem>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

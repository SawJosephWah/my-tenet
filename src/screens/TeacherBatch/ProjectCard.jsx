import React from 'react'

export default function ProjectCard({ task }) {
    return (
        <div className="card project mb-2">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <span className="course-item mb-1"><i className="fa-brands fa-youtube me-2 text-danger"></i>{task.task_type_name}</span>
                    <span>10:20</span>
                </div>
                <div className="title">{task.name}</div>
                <p className="paragraph">
                    {task.description}
                </p>

            </div>

        </div>
    )
}

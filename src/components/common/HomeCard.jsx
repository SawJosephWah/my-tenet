import React, { useEffect } from 'react'

export default function HomeCard({ active ,task , onClick }) {
    const baseClass = 'card shadow-sm my-3 teaher-home-card';
    const conditionalClass = active ? 'active-card' : '';
    const combinedClass = `${baseClass} ${conditionalClass}`;
    useEffect(() => {
    })
    return (
        <div className={combinedClass} style={{cursor:"pointer"}} onClick={() => onClick(task)}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <span className="home-card-title-1 mb-1"><i className="fa-brands fa-youtube me-2 text-danger"></i>Video Lesson</span>
                    <span className="home-card-time-length">10:20</span>
                </div>
                <div className="home-card-title-2">{task.name}</div>
                <p className="home-card-paragraph">{task.description}</p>
            </div>
        </div>
    )
}

import React from 'react'

export default function HomeCard({active}) {
    const baseClass = 'card shadow-sm my-3';
    const conditionalClass = active ? 'active-card' : '';
    const combinedClass = `${baseClass} ${conditionalClass}`;
    return (
        <div className={combinedClass}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <span className="home-card-title-1 mb-1"><i className="fa-brands fa-youtube me-2 text-danger"></i>Video Lesson</span>
                    <span className="home-card-time-length">10:20</span>
                </div>
                <div className="home-card-title-2">What is Server?</div>
                <p className="home-card-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

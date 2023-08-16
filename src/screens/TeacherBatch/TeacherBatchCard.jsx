import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../components/common/CommonFunction';


export default function TeacherBatchCard({ batch }) {
    const user = useSelector(state => state.auth);
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/teacher-batch/details/${batch.id || 0}`);
    };
    return (
        <>
            <div className="card teacher-course-card mb-2 p-3 p-md-2" onClick={handleCardClick}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="img"></div>
                    </div>
                    <div className="col-md-9">
                        <div className="teacher-course-card-info">
                            <div className="title">{batch.course_name} {batch.batch_number && `(Batch ${batch.batch_number})`}</div>
                            <div className="paragraph">{formatDate(batch.start_date)} - {formatDate(batch.end_date)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

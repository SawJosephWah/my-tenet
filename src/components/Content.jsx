import React from 'react'
import ContentHeader from './ContentHeader'
import ContentBody from './ContentBody'
import "../assets/css/Content.css"

export default function Content() {
    return (
        <div className="content-container">
            <ContentHeader></ContentHeader>
            <ContentBody></ContentBody>
        </div>
    )
}

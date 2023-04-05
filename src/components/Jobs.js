import "../styles/jobs.css";

import { Card } from "./Card"

export const Jobs = (props) => {
    return (
        <div className= 'jobs'>
            <Card name="Find JOBS"/> 
            <h1 className='jobHeader'>Vacancy Available</h1>
            <div>
                {props.jobs.map((job) => {
                    return (
                    <div className='category'> 
                        <p>Position: {job.position} </p>
                        <p>Job Type: {job.jobType} </p>
                        <p>Location: {job.location} </p>
                    </div>)
                })}
            </div>
        </div>        
    )
}
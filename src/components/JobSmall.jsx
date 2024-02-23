import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const JobSmall = function() {
    const [showMore, setShowMore] = useState(false);
    const storedJobs = useSelector(state => state.jobs.allTheJobs);
    const [sortedJobs, setSortedJobs] = useState([]);

    useEffect(() => {
        let selectedJobs = [];
        let tentativi = 0;

        while (selectedJobs.length < 25 && tentativi < storedJobs.length * 2) {
            const randomIndex = Math.floor(Math.random() * storedJobs.length);
            const job = storedJobs[randomIndex];

            if (!selectedJobs.find(j => j._id === job._id)) {
                selectedJobs.push(job);
            }

            tentativi++;
        }

        setSortedJobs(selectedJobs);
    }, [storedJobs])

    const handleShowMore = () => {
        setShowMore(!showMore)
    }
    return (
        <div className="card" style={{backgroundColor: 'white', borderRadius: '10px', textAlign: 'left', margin:"20px 0 0 0" }}>
            <h5 className="m-1" style={{textAlign:"center"}}>Jobs for you:</h5>
            <ul className="custom-ul">
                {(showMore ? sortedJobs : sortedJobs.slice(0, 3)).map((jobAnnounce, index) => (
                    <li key={index}><a href={jobAnnounce.url} target="_blank" >{jobAnnounce.title} - {jobAnnounce.company_name}</a></li>
                ))}
            </ul>
            <button style={{width:"100%", borderRadius:"15px"}} className="text-dark" onClick={handleShowMore}>{showMore ? 'Nascondi' : 'Vedi altro'}</button>
        </div>
    );
    
    
    
}

export default JobSmall;

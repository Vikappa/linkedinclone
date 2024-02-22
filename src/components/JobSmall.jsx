import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const JobSmall = function(){

    const [showMore, setShowMore] = useState(false)
    const storedJobs = useSelector(state => state.jobs)
    const [sortedJobs, setSortedJobs] = useState([])

    useEffect(() => {
        let selectedJobs = []
        let tentativi = 0
    
        while (selectedJobs.length < 25 && tentativi < storedJobs.length * 2) {
          const randomIndex = Math.floor(Math.random() * storedJobs.length)
          const job = storedJobs[randomIndex]
    
          if (!selectedJobs.includes(job)) {
            selectedJobs.push(job)
          }
    
          tentativi++
        }
        setSortedJobs(selectedJobs)
      }, [storedJobs])
    
      useEffect(() => {
        console.log(storedJobs)
        console.log(sortedJobs)
      }, [storedJobs])
    
      useEffect(() => {
        console.log(storedJobs)
        console.log(sortedJobs)
      }, [sortedJobs])

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    return(
        <div className="card" style={{backgroundColor: 'white', borderRadius: '10px', textAlign: 'left', margin:"20px 0 0 0" }}>
            <h5 className="m-1" style={{textAlign:"center"}}>Jobs for you:</h5>
            {showMore? sortedJobs.slice(0,3).map((jobAnnounce, index) => {
                <li key={index}>{jobAnnounce.title}</li>
            })
            :
            sortedJobs.map((jobAnnounce, index) => {
                <li key={index}>{jobAnnounce.title}</li>
            })
            }
            <button onClick={handleShowMore}>{showMore ? 'Nascondi' : 'Vedi altro'}</button>
        </div>    )
}

export default JobSmall
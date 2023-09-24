import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../../utility/localStorage";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);

    // this handle for filter by 
    const [ displayJobs , setDisplayJobs] = useState([]);

    
    // this handle for filter by 
    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if( filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }


    useEffect(() => {
        const storedJobIds = getStoreJobApplication();
        if (jobs.length > 0) {

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }

            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            // console.log(jobs, storedJobIds, jobsApplied); 
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])

    return (
        <div>
            <h3 className="text-3xl">Applied Jobs: {appliedJobs.length}</h3>
            {/* start for dropdown btn */}
            <div>
                <div className="dropdown dropdown-left">
                    <label tabIndex={0} className="btn m-1">Filter By</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=> handleJobsFilter('all')}><a>All Types</a></li>
                        <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={()=> handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </div>
            </div>
            {/* end for dropdown btn */}
            
            <ul>
                {
                   displayJobs.map(job => <li key={job.id}><span>{job.job_title}  {job.company_name}  :: {job.remote_or_onsite}</span></li>)
                }
            </ul>

            {/* Start for card section  */}
            

        </div>
    );
};

export default AppliedJobs;
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../../utility/localStorage";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);


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
            setAppliedJobs(jobsApplied)
        }
    }, [])

    return (
        <div>
            <h3 className="text-3xl">Applied Jobs: {appliedJobs.length}</h3>

            <div>
                <div className="dropdown dropdown-left">
                    <label tabIndex={0} className="btn m-1">Filter By</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>All Types</a></li>
                        <li><a>Remote</a></li>
                        <li><a>On site</a></li>
                    </ul>
                </div>
            </div>

            <ul>
                {
                    appliedJobs.map(job => <li key={job.id}><span>{job.job_title}  {job.company_name}  :: {job.remote_or_onsite}</span></li>)
                }
            </ul>

        </div>
    );
};

export default AppliedJobs;
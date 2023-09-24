import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplyJob = ()=>{
        saveJobApplication(idInt)
        toast('You have applied this job SUCCESSFULLY' );
    }
    


    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4 mb-10">
                <div className="border md:col-span-3">
                    <h2 className="text-2xl">Details coming here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                    <p><span className="text-blue-300 font-extrabold">Job Description: </span>{job.job_description}</p>
                    <p><span className="text-blue-300 font-extrabold">Job Responsibility: </span>{job.job_responsibility}</p>
                    <p><span className="text-blue-300 font-extrabold">Educational Requirements: </span>{job.educational_requirements}</p>
                    <p><span className="text-blue-300 font-extrabold">Job Experiences: </span>{job.experiences}</p>

                </div>
                <div className="border">
                    <h2 className="text-2xl text-lime-800 border-b-2 mt-3 p-3">Job Details</h2>
                    <p><span className="text-blue-300 font-extrabold">Job Title: </span>{job.job_title}</p>
                    <p><span className="text-blue-300 font-extrabold">Salary: </span>{job.salary}</p>
                    <h2 className="text-2xl text-lime-800 border-b-2 mt-3 p-3">Contact Information</h2>
                    <p><span className="text-blue-300 font-extrabold">Phone:</span>{job.contact_information.phone}</p>
                    <p><span className="text-blue-300 font-extrabold">Email:</span>{job.contact_information.email}</p>
                    <p><span className="text-blue-300 font-extrabold">Address:</span>{job.contact_information.address}</p>
                    <button onClick={handleApplyJob} className="btn btn-accent w-full mt-3">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
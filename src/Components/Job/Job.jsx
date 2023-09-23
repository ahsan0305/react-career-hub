import { MdLocationOn , MdAttachMoney} from "react-icons/md";

const Job = ({ job }) => {

    const { logo, job_title,company_name,remote_or_onsite,location, job_type,salary} = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-10 ">
                    <button className="border-2 text-blue-400 border-blue-400 px-5 py-2 rounded">{remote_or_onsite}</button>
                    <button className="border-2 text-blue-400 border-blue-400 px-5 py-2 rounded">{job_type}</button>
                </div>
                <div className="flex gap-10">
                    <p className="flex text-center mr-2"><MdLocationOn className="text-lg"></MdLocationOn>{location}</p>
                    <p className="flex text-center mr-2">Salary: <MdAttachMoney className="text-lg"></MdAttachMoney>{salary}</p>
                </div>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;
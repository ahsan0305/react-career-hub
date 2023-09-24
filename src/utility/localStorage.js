const getStoreJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-application');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [] ;
}

const saveJobApplication = id =>{
    const storedJobApplications = getStoreJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications));
    }


}

export {getStoreJobApplication,saveJobApplication}
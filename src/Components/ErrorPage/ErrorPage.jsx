import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center my-3">
            <h3 className="text-4xl">Oops!!!</h3>
            <p className="text-xl">Sorry, an unexpected error has occurred.</p>
            <Link className="bg-red-400 p-1 m-2 rounded-lg text-white" to={'/'}>Go Back to Home !</Link>
            
        </div>
    );
};

export default ErrorPage;
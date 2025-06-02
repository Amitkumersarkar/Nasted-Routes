import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h3>404 Page Not Found..!!</h3>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>The page is not found</h3>
                    <Link to='/'>Home Page</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
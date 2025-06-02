import { useLoaderData } from "react-router-dom";

const UsersDetails = () => {
    const user = useLoaderData();
    const { name } = user;
    return (
        <div>
            <h2>Here is the user details: {name}</h2>
        </div>
    );
};

export default UsersDetails;
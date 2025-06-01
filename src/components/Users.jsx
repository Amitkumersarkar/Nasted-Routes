import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    console.log(Users);
    const users = useLoaderData();
    return (
        <div>
            <h2>Users :{Users.length} </h2>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;
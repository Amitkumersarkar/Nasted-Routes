import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, image, email, phone, name } = user;
    return (
        <div>
            <h2>{name} </h2>
            <p>{id}</p>
            <p>{image}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;
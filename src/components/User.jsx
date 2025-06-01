
const User = ({ user }) => {
    const { id, image, email, phone, name } = user;
    return (
        <div>
            <h2>{name} </h2>
            <p>{id}</p>
            <p>{image}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default User;
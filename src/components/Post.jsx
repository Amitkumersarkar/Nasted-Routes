import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div>
            <h3>Post of id : {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleShowDetails}>Click To Show Details</button>
        </div>
    );
};

export default Post;
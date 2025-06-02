import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;
    return (
        <div>
            <h3>Post of id : {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;
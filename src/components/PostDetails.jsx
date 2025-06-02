import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title } = post;
    return (
        <div>
            <h4>Post details : {title}</h4>
            <p>{id}</p>
        </div>
    );
};

export default PostDetails;
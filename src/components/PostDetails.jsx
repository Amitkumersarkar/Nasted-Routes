import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { postId } = useParams();
    const { id, title } = post;

    const navigate = useNavigate();
    console.log(postId);
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h4>Post details : {title}</h4>
            <p>{id}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;
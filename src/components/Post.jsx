
const Post = ({ post }) => {
    const { id, title } = post;
    return (
        <div>
            <h3>Post of id : {id}</h3>
            <p>{title}</p>
        </div>
    );
};

export default Post;
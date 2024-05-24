import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    return (
        <div>
            <h3>Post Id:{post.id}</h3>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;
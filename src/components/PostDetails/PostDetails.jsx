import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const navigate = useNavigate();
    const post = useLoaderData()
    const handleGoBack = () =>{
        navigate(-1)
    }
    const {postId} = useParams();

    console.log(postId);
    return (
        <div>
            <h3>Post Id:{post.id}</h3>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;
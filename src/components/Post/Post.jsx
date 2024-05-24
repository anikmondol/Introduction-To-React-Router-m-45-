import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {


    const navigate = useNavigate();

    const {id, title, body} = post;


    const handleShowDetails = () =>{
        navigate(`/post/${id}`)
    }


    return (
        <div className='postStyle'>
            <h3>Post Id: {id}</h3>
            <p>{title}</p>
            <p>{body.slice(0, 20)}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button onClick={handleShowDetails}>Click to See Details</button>
        </div>
    );
};

export default Post;
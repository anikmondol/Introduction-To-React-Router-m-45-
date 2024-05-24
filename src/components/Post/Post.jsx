import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className='postStyle'>
            <h3>Post Id: {id}</h3>
            <p>{title}</p>
            <p>{body.slice(0, 20)}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;
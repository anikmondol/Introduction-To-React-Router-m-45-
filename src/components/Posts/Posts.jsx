import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'


const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h3>This is a About Posts: {posts.length}</h3>
            <div className="postsStyle">
                {
                    posts.map((post, index) => <Post key={index} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;
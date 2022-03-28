import {useHistory, useParams } from 'react-router-dom';
import useFetch from "../Components/useFetch";

const BlogDetails = () =>  {
    const { id } = useParams();
    const { error, isPending, data: blog } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleclick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> } 
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleclick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;

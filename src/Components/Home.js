import Bloglist from "../Components/Bloglist";
import useFetch from "../Components/useFetch";

const Home = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs');

    return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {/*<Bloglist, must refresh if locate at another folder */} 
        { blogs && <Bloglist blogs={blogs} /> }
</div>
    );
}

export default Home;


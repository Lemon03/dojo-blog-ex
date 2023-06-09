import useFetch from '../useFetch';
import Bloglist from './Bloglist';

function Home(){
    const {data:blogs, isPending, error} = useFetch('http://localhost:3000/blogs')
    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            {blogs && <Bloglist blogs={blogs} title="All blogs" />}
        </div>
    );
}

export default Home;
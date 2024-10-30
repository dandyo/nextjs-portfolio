import CreatePost from "./components/CreatePost";
import PostCard from "./components/PostCard";

export default function Home() {
    return (
        <>

            <div className="container-sm mx-auto py-5">
                <h1 className="title-1">Welcome!</h1>

                <CreatePost />

                <PostCard />
                <PostCard />
                <PostCard />
            </div>


        </>
    );
}
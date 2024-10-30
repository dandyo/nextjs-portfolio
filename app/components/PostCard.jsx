import Image from "next/image";

export default function PostCard() {
    return (
        <div className="card post-card">
            <div className="post-card-wrap">
                <div className="post-author-img">
                    <Image src="https://placehold.co/100x100" className="rounded-full" width={64} height={64} unoptimized alt="" />
                </div>
                <div className="post-details">
                    <div className="post-author">
                        <h5>Post Author</h5> <i>&bull;</i> <span>6 hr ago</span>
                    </div>
                    <div className="post-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

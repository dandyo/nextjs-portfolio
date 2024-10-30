import Image from "next/image";

export default function CreatePost() {
    return (
        <div className='create-post-form'>
            <div className="create-post-author">
                <Image src="https://placehold.co/100x100" className="rounded-full" width={64} height={64} unoptimized alt="" />
            </div>
            <div className="create-post-content focus-within:ring-2 focus-within:ring-indigo-600">
                <form>
                    <textarea className="placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"></textarea>
                </form>
            </div>
        </div>
    )
}

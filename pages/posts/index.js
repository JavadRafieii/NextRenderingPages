export default function PostsPage({ posts }) {
    return (
        <>
            <h1>Posts Page</h1>
            <ul>
                {posts.map(post => <li key={post.id} style={{ margin: "10px 0" }}>{post.title}</li>)}
            </ul>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return {
        props: {
            posts,
        }
    }
}
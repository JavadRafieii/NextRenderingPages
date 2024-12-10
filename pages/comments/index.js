import { useEffect, useState } from "react";

export default function CommentsPage(props) {

    const [comments, setComments] = useState(props.comments);

    useEffect(() => {
        async function getComments() {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments');
            const comments = await res.json();
            setComments(comments);
        }
        getComments();
    }, []);

    return (
        <>
            <h1>Comments Page</h1>
            <ul>
                {comments.map(comment => <li key={comment.id} style={{ margin: "10px 0" }}>{comment.name}</li>)}
            </ul>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await res.json();
    return {
        props: {
            comments,
        }
    }
};
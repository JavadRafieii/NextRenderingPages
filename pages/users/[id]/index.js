import { useRouter } from 'next/router';

export default function UserDetailsPage({ user }) {    

    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (Object.keys(user).length === 0) {
        return <div>The desired post was not found.</div>;
    }

    return (
        <>
            <h1>User Details Page</h1>
            <ul>
                <li>{user.name}</li>
                <li>{user.email}</li>
            </ul>
        </>
    );
}



export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }));

    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return {
        props: {
            user,
        }
    }
};
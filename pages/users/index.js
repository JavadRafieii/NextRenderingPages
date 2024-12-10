export default function UsersPage({ users }) {
    return (
        <>
            <h1>Users Page</h1>
            <ul>
                {users.map(user => <li key={user.id} style={{margin: "10px 0"}}>{user.name}</li>)}
            </ul>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return {
        props: {
            users,
        }
    }
};
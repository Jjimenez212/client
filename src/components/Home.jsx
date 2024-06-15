import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedUser = useLoaderData();

    const [users, setUsers] = useState(loadedUser);

    const handleDelete = (_id) => {
       // console.log(_id)

       fetch(`http://localhost:5000/users/${_id}`, {
        method: 'DELETE',
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        const filter = users.filter(user =>user._id !== _id);
        setUsers(filter);
       })
    }
    return (
        <div>
            <h2>All users: {loadedUser.length }</h2>

            <div className="user-cards">
                {
                    users.map(user => <div key={user._id} className="cards">
                        <img src={user.photoUrl} alt="" />
                        <h5>{user.name}</h5>
                        <p>{user.email}</p>
                        <div className="btn">
                            <button onClick={() => handleDelete(user._id)}>Delete</button>
                            <Link to={`/update-user/${user._id}`}>Update</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;
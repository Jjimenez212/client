import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const loader = useLoaderData();
    const {name, email, _id} = loader;

    const handleUserUpdate = (e) => {
        event.preventDefault();
    const form = e.target;
   // console.log(form);
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, photoUrl);

    const loadedUser = { name, email, photoUrl };
    fetch(`http://localhost:5000/users/${_id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(loadedUser),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    };
    return (
        <div>
            <h2>Update info of {loader.name}</h2>

            <form onSubmit={handleUserUpdate}>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={name}
/>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={email}
        />
        <input
          type="text"
          name="photoUrl"
          id="photoUrl"
       //   defaultValue={photoUrl}
       placeholder="Enter your Photo Url"
        />
        <input type="submit" value="update User" />
      </form>
        </div>
    );
};

export default UpdateUser;
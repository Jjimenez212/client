import "../App.css";

const CreateUser = () => {
  const handleUser = (e) => {
    event.preventDefault();
    const form = e.target;
    console.log(form);
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, photoUrl);

    const user = { name, email, photoUrl };
    console.log(user);

    fetch("http://localhost:5000/users", {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged > 0){
            alert("User added successfully!");
            form.reset();
        }
      });
  };

  return (
    <div className="createuser">
      <h2>Create A New User:</h2>

      <form onSubmit={handleUser}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
        <input
          type="text"
          name="photoUrl"
          id="photoUrl"
          placeholder="Enter Your PhotoUrl"
        />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default CreateUser;

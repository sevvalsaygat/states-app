import { useState } from "react";

function App() {
  const [name, setName] = useState("Şevval");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [adress, setAddress] = useState({ title: "Istanbul", zip: 34756 });

  console.log(age, name, friends);

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Nejdet")}>Change name</button>
      <button onClick={() => setAge(25)}>Change age</button>

      <hr />
      <br></br>

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}

      <br></br>

      <button onClick={() => setFriends([...friends, "Sevde"])}>Add new friends</button>


      <hr />
      <br></br>

      <h2>Address</h2>
      <div>
        {adress.title} {adress.zip}
      </div>

      <br />

      <button onClick={() => setAddress({ ...adress, title: "Ankara", zip: 36100 })}>Change the address</button>
    </div>
  );
}

export default App;

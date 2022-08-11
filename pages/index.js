import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import UserCard from "../components/UserCard";
import axios from "axios";

export default function Home() {
  const [counter, setCounter] = useState(1);
  const [userData, setUserData] = useState([]);
  const genUsers = async () => {
    if (counter < 1) {
      alert(`Invalid number of user`);
      return;
    }

    const resp = await axios.get(
      `https://randomuser.me/api/?results=${counter}&inc=name,email,location,picture`
    );
    const newUser = [];
    for (const x of resp.data.results) {
      newUser.push({
        name: x.name.first + " " + x.name.last,
        email: x.email,
        imgUrl: x.picture.large,
        address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
      });
    }
    setUserData(newUser);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          onChange={(event) => {
            setCounter(event.target.value);
          }}
          value={counter}
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>
      {userData.map((user) => (
        <UserCard
          key={user.name}
          name={user.name}
          email={user.email}
          address={user.address}
          imgUrl={user.imgUrl}
        />
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Supasan Ruangchutipopan 640610671
      </p>
    </div>
  );
}

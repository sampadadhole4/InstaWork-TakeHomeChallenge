import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Edit from "./components/Edit";
import List from "./components/List";
import AddSvg from "./assets/close.svg";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [currentMember, setCurrentMember] = useState({
    firstname: "John",
    lastname: "Doe",
    contact: "415-310-1619",
    email: "adhrin@instah.com",
    isAdmin: true,
  });
  const [currentScreen, setCurrentScreen] = useState("list");
  const [members, setMembers] = useState([
    {
      id: uuidv4(),
      firstname: "Pizza",
      lastname: "Python",
      contact: "415-310-1619",
      email: "adhrin@instah.com",
      isAdmin: true,
    },
    {
      id: uuidv4(),
      firstname: "Charlene",
      lastname: "Pham",
      contact: "415-310-1619",
      email: "adhrin@instah.com",
      isAdmin: false,
    },
    {
      id: uuidv4(),
      firstname: "Benson",
      lastname: "Mach",
      contact: "415-310-1619",
      email: "adhrin@instah.com",
      isAdmin: false,
    },
    {
      id: uuidv4(),
      firstname: "Dan",
      lastname: "Petrie",
      contact: "415-310-1619",
      email: "adhrin@instah.com",
      isAdmin: false,
    },
  ]);

  const props = {
    members,
    setMembers,
    currentScreen,
    setCurrentScreen,
    currentMember,
    setCurrentMember,
    AddSvg,
  };

  console.log(members);

  return (
    <div className="App">
      {currentScreen == "list" ? (
        <List {...props} />
      ) : currentScreen == "add" ? (
        <Add {...props} />
      ) : (
        <Edit {...props} />
      )}
    </div>
  );
}

export default App;

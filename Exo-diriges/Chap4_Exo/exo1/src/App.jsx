import React from "react"

export default function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mdp, setMdp] = React.useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "mdp") {
      setMdp(value);
    }
  }

  return (
    <div>
      <label>Nom :
        <input 
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label>Email : 
        <input 
          type="email" 
          name="email"
          value = {email}
          onChange={handleChange}
        />
      </label>
      <label>Mot-de-passe : 
        <input 
          type="password" 
          name="mdp"
          value = {mdp}
          onChange={handleChange}
        />
      </label>
      <p>Bonjour, {name} !</p>
      <p>Votre email : {email}</p>
      <p>Votre mot-de-passe : {mdp}</p>
    </div>
  )
}
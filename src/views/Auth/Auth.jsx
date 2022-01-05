import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../../context/UserContext";



export default function Auth() {
  //   const { user, setUser } = useUser();
  //   const location = useLocation();
  //   const { from } = location.state || { from: { pathname: '/' } };

  const history = useHistory()
  const {login} = useUser();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
    
    const loginSuccess = login(name, password)
    
    return loginSuccess
    ? history.push('/')
    : setError('ugh, you the worst')
  }

  return (
    <fieldset className="w-1/4 border p-4">
      <legend>Sign In</legend>
      <form onSubmit={handleLogin} className="grid grid-cols-[1fr_2fr] grid-rows-3">
        <label htmlFor="username" className="self-center text-right">
          Username
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="username"
          type="text"
          name="username"
          className="border p-2 m-3"
          required
        />
        <label htmlFor="password" className="self-center text-right">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          type="password"
          name="password"
          className="border p-2 m-3"
          required
        />
        <button
          type="submit"
          className="h-12 self-center bg-black text-white p-1 font-bold col-span-2"
        >
          Sign In
        </button>
      </form>

      <p className="text-center text-red-500 font-bold">
        {error}
      </p>

    </fieldset>
  );
}

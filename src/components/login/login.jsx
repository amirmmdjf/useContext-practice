import { createContext, useContext } from "react";
import { AppContext } from "../../App";

export const UsernameContext = createContext()

const Login = () => {

    const { setIsLogin, username, setUsername } = useContext(AppContext)

    const IsLoginHandler = (event) => {
        event.preventDefault();
        setIsLogin(true);
    }

    const changeHandler = (e) => {
        setUsername(e.target.value);
    };

    console.log(username);

    return (

        <form className="flex flex-col justify-center items-center w-[400px] h-[350px] py-7 px-4 bg-blue-100 mx-auto mt-10 rounded">

            <h1 className="font-bold pb-5 text-[24px]">ورود</h1>

            <label htmlFor="username">نام کاربری</label>
            <input value={username} onChange={changeHandler} type="text" id="username" className="w-10/12 my-4 outline-none px-2 py-1" />

            <label htmlFor="password" className="mt-4">گذرواژه</label>
            <input type="password" id="password" className="w-10/12 mt-4 outline-none px-2 py-1" />

            <button onClick={IsLoginHandler} type="submit" className="mt-10 bg-green-600 text-white px-4 py-1 rounded">تایید</button>

        </form>

    );
}

export default Login;
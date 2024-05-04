import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const Header = () => {

    const { isLogin, setIsLogin, username } = useContext(AppContext)


    const IsLoginHandler = () => {
        setIsLogin(false)
    }

    return (
        <div className="w-full h-14 flex items-center bg-gray-200">

            <div className="w-8/12 h-full pr-[100px] flex items-center">
                <ul className="flex w-[220px] justify-between">
                    <li><Link to='/'>خانه</Link></li>
                    <li><Link to='/article'>مقاله</Link></li>
                    <li onClick={IsLoginHandler} className="text-red-700 cursor-pointer">خروج</li>
                </ul>
            </div>

            <div className="w-4/12 flex justify-center pr-[100px]">
                <button className="h-[50px] bg-blue-600 text-white rounded-lg px-3">
                    {isLogin ? <span>{username}</span> : <span>نام کاربری</span>}
                </button>
            </div>

        </div>
    );
}

export default Header;
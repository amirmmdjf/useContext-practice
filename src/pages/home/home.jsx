import { useContext } from "react";
import { AppContext } from "../../App";
import Login from '../../components/login/login'


const Home = () => {

    const { isLogin } = useContext(AppContext)

    return (
        <>
            {
                isLogin ? <span>شما وارد شدید</span> : <Login />
            }
        </>
    );
}

export default Home;
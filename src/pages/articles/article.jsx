import { useContext } from "react";
import { AppContext } from "../../App";
import ArticleComponent from "../../components/article/article";


const Article = () => {

    const { isLogin } = useContext(AppContext)

    return (
        <>
            {
                isLogin ? <ArticleComponent /> : <span>شما باید وارد شوید</span>
            }
        </>
    );
}

export default Article;
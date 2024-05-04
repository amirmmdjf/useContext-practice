import Home from "./pages/home/home"
import Article from "./pages/articles/article"

let routes = [
    { path: '/', element: <Home /> },
    { path: '/article', element: <Article /> },
]

export default routes
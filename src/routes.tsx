import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import MusicDetailPage from "./pages/MusicDetailPage";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
    {
        path :"/",
        element : <Layout/>,
        errorElement : <ErrorPage/>,
        children : [
            {index : true , element : <HomePage/>},
            {path : "music/:id" , element : <MusicDetailPage/>}
        ]
    }
])
export default router;
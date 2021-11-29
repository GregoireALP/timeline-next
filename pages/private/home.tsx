import type { NextApiRequest, NextApiResponse, NextPage, NextPageContext } from "next"
import { Document } from "react-pdf"
import PrivateLayout from "../../components/privateLayout"
import { checkUser } from "../../core/Middleware"

const Home: NextPage = () => {

    return (
        <div>
            <p className="title">Tableau de bord</p>
        </div>
    )
}

export default Home
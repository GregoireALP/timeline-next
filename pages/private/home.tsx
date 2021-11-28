import type { NextApiRequest, NextApiResponse, NextPage, NextPageContext } from "next"
import PrivateLayout from "../../components/privateLayout"
import { checkUser } from "../../core/Middleware"

const Home: NextPage = () => {

    return (
        <PrivateLayout title="Timeline | Dashboard">
            <p className="title">Tableau de bord</p>
        </PrivateLayout>
    )
}

export default Home
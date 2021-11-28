import type { GetServerSideProps, NextApiRequest, NextApiResponse, NextPage, NextPageContext } from "next"
import { checkUser } from "../core/Middleware";
import PrivateNavbar from "./privateNavbar";

interface IProps {
    children: React.ReactNode;
    title: string;
}

const PrivateLayout: NextPage<IProps> = ({ children, title = "Timelime" }) => {

    return (
        <html>
            <head>
                <title>{title}</title>
                <meta charSet='utf-8' />
                <div id="fb-root"></div>
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v12.0" nonce="5JkwN1pl"></script>
            </head>
            <body>
                <PrivateNavbar />
                {children}
            </body>
        </html>
    )
}

export default PrivateLayout

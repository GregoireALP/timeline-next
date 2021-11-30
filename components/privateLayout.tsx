import type { NextPage } from "next"
import PrivateNavbar from "./privateNavbar";
import Head from "next/head"

interface IProps {
    children: React.ReactNode;
    title: string;
}

const PrivateLayout: NextPage<IProps> = ({ children, title = "Timelime" }) => {

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet='utf-8' />
                <div id="fb-root"></div>
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v12.0" nonce="5JkwN1pl"></script>
            </Head>
            <main>
                <PrivateNavbar />
                {children}
            </main>
        </div>
    )
}

export default PrivateLayout

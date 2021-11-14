import Footer from "./footer";
import Navbar from "./navbar";
import type { NextPage } from "next"

interface IProps {
    children: React.ReactNode;
    title: string
}

const Layout: NextPage<IProps> = ({ children, title = "Timelime" }) => {
    return (
        <html>
            <head>
                <title>{title}</title>
                <meta charSet='utf-8' />
                <div id="fb-root"></div>
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v12.0" nonce="5JkwN1pl"></script>
            </head>
            <body>
                <Navbar />
                {children}
            </body>
            <Footer/>
        </html>
    )
}

export default Layout
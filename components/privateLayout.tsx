import type { NextPage } from "next"
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
                <script src="https://cdn.tiny.cloud/1/xfjdq9wdhcqczki2yid2odf7lyey0tpshcsab5vkkra16xty/tinymce/5/tinymce.min.js" referrerPolicy="origin"></script>
            </head>
            <body>
                <PrivateNavbar />
                {children}
            </body>
        </html>
    )
}

export default PrivateLayout

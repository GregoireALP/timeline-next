import type { NextPage } from "next"
import Layout from "../../components/layout"
import PrivateLoginForm from "../../components/privateLogin"

const PrivateLogin: NextPage = () => {

    return (
        <Layout title="Timeline | Login">
            <PrivateLoginForm />
        </Layout>
    )
}

export default PrivateLogin
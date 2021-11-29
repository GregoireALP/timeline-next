import type { NextPage } from "next"
import Link from "next/link"

const Footer: NextPage = () => {
    return (
        <footer className="footer">
            <a className="contact">Nous contacter</a>
            <p className="copyright">© Copyright 2021 G.Alperovitch</p>
            <Link href="login">Se Connecter</Link>
        </footer>
    )
}

export default Footer
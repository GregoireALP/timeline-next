import type { NextPage } from "next"
import Link from 'next/link'

const PrivateNavbar: NextPage = () => {
    return (
        <nav className="navbar">

        <div className="navbar-decoration">
            <Link href='/private/home'><a className="navbar-title">TL-Root</a></Link>
        </div>

        <div className="navbar-navigation">

            <div className="navbar-nav">
                <Link href="/private/home"><a className="nav-item">Dashboard</a></Link>
                <Link href="/private/news"><a className="nav-item">Articles</a></Link>
                <Link href="/private/results"><a className="nav-item">Résultats</a></Link>
                <Link href="/private/medias"><a className="nav-item">Medias</a></Link>
            </div>

        </div>

    </nav>
    )
}

export default PrivateNavbar
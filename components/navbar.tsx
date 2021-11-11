import type { NextPage } from 'next'
import Link from 'next/link'

const Navbar: NextPage = () => {
    return (
        <nav className="navbar">

            <div className="navbar-decoration">
                <Link href='/'><a className="navbar-title">Timeline</a></Link>
            </div>

            <div className="navbar-navigation">

                <div className="navbar-nav">
                    <Link href="/"><a className="nav-item">Acceuil</a></Link>
                    <Link href="/blog"><a className="nav-item">Blog</a></Link>
                    <Link href="/resultats"><a className="nav-item">Resultats</a></Link>
                    <Link href="/medias"><a className="nav-item">Médias</a></Link>
                    <Link href="/bateau"><a className="nav-item">Bateau</a></Link>
                </div>

            </div>

        </nav>
    )
}

export default Navbar

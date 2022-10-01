import Link from "next/link";
import NavStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={NavStyles.nav_menu}>
            <ul className={NavStyles.menu_container}>
                <li className={NavStyles.menu_item}>
                    <Link href="/">
                        <a className={[NavStyles.menu_link, "underline"].join(" ")}>Home</a>
                    </Link>
                </li>
                <li className={NavStyles.menu_item}>
                    <Link href="/about">
                        <a className={[NavStyles.menu_link, "underline"].join(" ")}>About</a>
                    </Link>
                </li>
                <li className={NavStyles.menu_item}>
                    <Link href="/blogs">
                        <a className={[NavStyles.menu_link, "underline"].join(" ")}>Blogs</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
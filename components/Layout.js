import Nav from './Nav'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <main className={styles.main}>
            <Nav />
            {children}
        </main>
    )
}

export default Layout
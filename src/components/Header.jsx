import styles from "./Header.module.css";

function Header(){
    return(
        <nav className={styles.header}>
            <div className={styles.leftNav}>
                <a href="https://www.youtube.com/@spoonfedstudy">
                    <img className={styles.logo} src="/channel_pfp.jpg" alt="SpoonFedStudies" />
                </a>
            </div>
            <ul className={styles.rightNav}>
                <li className={styles.element}><a href="/">Home</a></li>
                <li className={styles.element}><a href="https://spoonfedstudy.com/collections/all">Catalog</a></li>
                <li className={styles.element}><a href="https://spoonfedstudy.com/pages/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Header
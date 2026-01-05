//Components
import Header from "../components/Header";

import styles from "./Landing.module.css";

function Landing(){

    return(
        <>
            <Header />
            <div className={styles.main}>
                <h1>Test</h1>
                <p>Yo</p>
            </div>
        </>
    )
}

export default Landing
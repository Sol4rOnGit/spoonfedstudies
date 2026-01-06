//Components
import Header from "../components/Header";
import LandingCard from "../components/cards/LandingCard";

import styles from "./Landing.module.css";

function Landing(){

    return(
        <>
            <Header />
            <div className={styles.hero}>
                <img src="/background.png" alt="Insane push up record from this man's dedication" className={styles.background} />
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>SpoonFedStudy</h1>
                    <p>Ex harvard doctor. Teaching you how to become a better you.</p>
                    <p>(While still enjoying life responsibly)</p>
                </div>
                <div className={styles.LandingCardWrapperWrapper}>
                    <div className={styles.LandingCardWrapper}>
                        <LandingCard
                        title="Youtube"
                        linkHref="https://www.youtube.com/@spoonfedstudy"
                        imgSrc="/channel_pfp.jpg"
                        imgAlt="youtube logo"
                        />

                        <LandingCard 
                        title="Shop"
                        linkHref="https://spoonfedstudy.com/collections/all"
                        imgSrc="/shopping_bag.png"
                        imgAlt="Shopping Logo"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
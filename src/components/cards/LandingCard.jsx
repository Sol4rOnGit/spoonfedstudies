import styles from "./LandingCard.module.css"

function LandingCard({title="", linkHref="", imgSrc="", imgAlt=""}){
    return(
        <a className={styles.cardWrapper} href={linkHref} target="_blank" rel="noopener noreferrer">
            <h4>{title}</h4>
            <img src={imgSrc} alt={imgAlt} />
        </a>

    );
}

export default LandingCard
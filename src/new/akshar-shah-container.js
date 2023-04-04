import styles from "./akshar-shah-container.module.css";

const AksharShahContainer = ({ frame251, linkedin }) => {
  return (
    <div className={styles.frameParent}>
      <img className={styles.frameChild} alt="" src={frame251} />
      <div className={styles.frameGroup}>
        <div className={styles.aksharShahParent}>
          <div className={styles.aksharShah}>
            <span className={styles.akshar}>Akshar </span>
            <span>Shah</span>
          </div>
          <div className={styles.founderAndCeo}>Founder and CEO</div>
        </div>
        <img className={styles.linkedinIcon} alt="" src={linkedin} />
      </div>
    </div>
  );
};

export default AksharShahContainer;

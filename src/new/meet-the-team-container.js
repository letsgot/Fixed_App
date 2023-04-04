import AksharShahContainer from "./akshar-shah-container";
import styles from "./meet-the-team-container.module.css";

const MeetTheTeamContainer = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.frameParent}>
        <div className={styles.meetTheTeamParent}>
          <div className={styles.meetTheTeam}>Meet the team</div>
          <div className={styles.discoverThePassion}>
            Discover the passion, expertise, and values that drive our team and
            fuel their commitment to excellence.
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <AksharShahContainer
                frame251="/frame-251.png"
                linkedin="/linkedin0.svg"
              />
            </div>
            <div className={styles.quotationParent}>
              <img
                className={styles.quotationIcon}
                alt=""
                src="/quotation.svg"
              />
              <img
                className={styles.quotationIcon1}
                alt=""
                src="/quotation1.svg"
              />
              <div className={styles.ourVisionIs}>
                Our vision is to make safe investments with better returns
                easily accessibly to all indians
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <AksharShahContainer
              frame251="/frame-2511.png"
              linkedin="/linkedin1.svg"
            />
            <AksharShahContainer
              frame251="/frame-2512.png"
              linkedin="/linkedin2.svg"
            />
            <AksharShahContainer
              frame251="/frame-2513.png"
              linkedin="/linkedin3.svg"
            />
            <AksharShahContainer
              frame251="/frame-2514.png"
              linkedin="/linkedin4.svg"
            />
            <AksharShahContainer
              frame251="/frame-2515.png"
              linkedin="/linkedin5.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeamContainer;
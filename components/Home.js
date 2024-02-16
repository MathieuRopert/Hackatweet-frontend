import styles from '../styles/Home.module.css';

function Home() {
  
  return (
    <div className={styles.main}>

      <div className={styles.leftcontent}>
        <img src='nouveaulogo.png' className='logo' height={200} width={150}></img>
{/*         <p className={styles.infouser}>{Username}</p>  
            <img pdp></img>
            <p> Nom </p>
*/}
        <button className={styles.logout}>Logout</button>
      </div>

      <div className={styles.home}>
        <h1 className={styles.title}>HOME</h1>
        <input type='text' placeholder="what's up ?" className={styles.whatsup}></input>
        <button className={styles.tweet}>Tweet</button>
      </div>

      <div className={styles.trends}>
        <h1 className={styles.titretrend}>Trends</h1>
        <p className={styles.contentTrends}></p>
      </div>

      <div className={styles.tweets}>

      </div>

    </div>
  );
}

export default Home;

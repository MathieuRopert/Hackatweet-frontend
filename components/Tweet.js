import styles from '../styles/Tweet.module.css';
import { useEffect, useState } from 'react';

function Tweet(props) {

    return(
<div className={styles.tweet}>
<div className={styles.userSection}>
<img src='logo.png' className={styles.pdp}/>
<p>{props.firstname}</p>
<p>{props.username}</p>
<p>{props.date}</p>
</div>
<div className={styles.tweetContent}>
{props.content}
</div>
<div className={styles.likes}>
{props.NumberLikes}
</div>
</div>
    );
}

export default Tweet;
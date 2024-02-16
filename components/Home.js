import React from 'react'
import { Redirect } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import user from '../reducers/user';
import tweet from '../reducers/tweets';
import Tweet from './tweet';

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const tweet = useSelector((state) => state.tweet.value);
  const [tweetContent, setTweetContent] = useState('');
  console.log(user.token);
  const [tweetContainer, setTweetContainer] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tweet')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setTweetContainer(data.Tweet.filter((data, i) => i >= 0));
        });
    },[setTweetContainer]);

  const handleTweet = () => {
    fetch(`http://localhost:3000/tweet/addtweet/${user.token}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: tweetContent,}),
  }).then(response => response.json())
  .then(data => {
    console.log(data)
    setTweetContent('');
  })
  };
  console.log(tweetContainer)
 
  const tweets = tweetContainer.map((data, i) => {
    return <Tweet key={i} {...data}/>
  })
  return (
    <div className={styles.main}>

      <div className={styles.leftcontent}>
        <img src='logo.png' className='logo' height={200} width={150}></img>
          <div className={styles.user}>
            <div>
            <img src='logo.png' className={styles.pdp}></img>
            </div>
            <div>
            <p className={styles.firstname}> {user.firstname} </p>
            <p className={styles.username}>@{user.username}</p>  
            </div>
          </div>
          <button className={styles.logout}>Logout</button>
      </div>

      <div className={styles.home}>
        <h1 className={styles.title}>HOME</h1>
        <input type='text' placeholder="what's up ?" className={styles.whatsup} onChange={(e) => setTweetContent(e.target.value)} value={tweetContent} ></input>
        <button className={styles.tweet} onClick={() =>handleTweet()}>Tweet</button>
      </div>

      <div className={styles.trends}>
        <h1 className={styles.titretrend}>Trends</h1>
        <p className={styles.contentTrends}></p>
      </div>

      <div className={styles.tweets}>
        {tweets}
      </div>

    </div>
  );
}

export default Home;

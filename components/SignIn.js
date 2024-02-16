import styles from '../styles/SignUp.module.css';
import { useState } from 'react';
import { login } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

function SignIn() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
	const [signInFirstname, setSignInFirstname] = useState('');
    const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

    const handleConnection = () => {

		fetch('http://localhost:3000/user/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signInFirstname, username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
                console.log(data)
				if (data.result) {
					dispatch(login({ firstname: signInFirstname, username: signInUsername, token: data.user.token }));
                    //console.log(login({ firstname: signInFirstname, username: signInUsername, token: data.user.token }))
                    setSignInFirstname('');
					setSignInUsername('');
					setSignInPassword('');
				}
			});
	};

    return (
        <div>
        <img src='logo.png' />
        <p>Connect to your hackatweet account</p>
        <input type="text" placeholder="firstname" className={styles.signInFirstname} onChange={(e) => setSignInFirstname(e.target.value)} value={signInFirstname} />
        <input type="text" placeholder="Username" className={styles.signInUsername} onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
        <input type="password" placeholder="Password" className={styles.signInPassword} onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
        <button className={styles.signin} onClick={() => handleConnection()}>Sign in</button>
        </div>
    );
}
export default SignIn;
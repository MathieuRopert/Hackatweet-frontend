import styles from '../styles/SignUp.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { login } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

function SignUp() {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');

    const handleRegister = () => {
		fetch('http://localhost:3000/user/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ firstname: signUpFirstname, username: signUpUsername, token: data.token }));
                    //console.log(login({ firstname: signUpFirstname, username: signUpUsername, token: data.token }))
                    router.push('/home');
                    setSignUpFirstname('');
					setSignUpUsername('');
					setSignUpPassword('');
				}
			});
	};

return(
        <div>
        <img src='logo.png' />
        <p>Create  your hackatweet account</p>
        <input type="text" placeholder="firstname" className={styles.signUpFirstname} onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
        <input type="text" placeholder="Username" className={styles.signUpUsername} onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
        <input type="password" placeholder="Password" className={styles.signUpfirstname} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
        <button className={styles.signup} onClick={() => handleRegister()}>Sign up</button>
        </div>
);
}

export default SignUp;
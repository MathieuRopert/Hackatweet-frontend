import styles from '../styles/Login.module.css';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import { login, logout } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
    const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

    const [isModalSignUpVisible, setIsModalSignUpVisible] = useState(false);
    const [isModalSigninVisible, setIsModalSignInVisible] = useState(false);
    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
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
				if (data.result) {
					dispatch(login({ firstname: signInFirstname, username: signInUsername, token: data.token }));
                    setSignInFirstname('');
					setSignInUsername('');
					setSignInPassword('');
                    setIsModalSignInVisible(false);
				}
                console.log(login())
			});
	};

    const handleRegister = () => {
		fetch('http://localhost:3000/user/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signUpUsername, token: data.token }));
                    setSignUpFirstname('');
					setSignUpUsername('');
					setSignUpPassword('');
                    setIsModalSignUpVisible(false);
				}
			});
	};

	const showModalSignup = () => {
		setIsModalSignUpVisible(!isModalSignUpVisible);
        //console.log(isModalSignUpVisible)
	};

    const showModalSignin = () => {
		setIsModalSignInVisible(!isModalSigninVisible);
        //console.log(isModalSigninVisible)
	};

    const modalSignUpContent = (
        <div>
        <img src='logo.png' />
        <p>Create  your hackatweet account</p>
        <input type="text" placeholder="firstname" className={styles.signUpFirstname} onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
        <input type="text" placeholder="Username" className={styles.signUpUsername} onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
        <input type="password" placeholder="Password" className={styles.signUpfirstname} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
        <button className={styles.signup} onClick={() => handleRegister()}>Sign up</button>
        </div>
        );

    const modalSignInContent = (
        <div>
        <img src='logo.png' />
        <p>Connect to your hackatweet account</p>
        <input type="text" placeholder="firstname" className={styles.signInFirstname} onChange={(e) => setSignInFirstname(e.target.value)} value={signInFirstname} />
        <input type="text" placeholder="Username" className={styles.signInUsername} onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
        <input type="password" placeholder="Password" className={styles.signInPassword} onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
        <button className={styles.signin} onClick={() => handleConnection()}>Sign in</button>
        </div>
        );



    return(
        <div className={styles.main}>
         <div className={styles.box1}></div>
          <div className={styles.box2}>
            <img src='logo.png' />
            <h1>See what's<br></br> happening</h1>
            <p>join Hachatweet today.</p>
            {isModalSignUpVisible && <div id="modal-overlay">
				<Modal getContainer="#modal-overlay" className={styles.modal} open={isModalSignUpVisible} onCancel={showModalSignup} footer={null} >
					{modalSignUpContent}
				</Modal>
			</div>}
            <button className={styles.signup}  onClick={showModalSignup}>Sign up</button>
            <p className={styles.account} >Already have a account ?</p>
            {isModalSigninVisible && <div id="modal-overlay">
				<Modal getContainer="#modal-overlay" className={styles.modal} open={isModalSigninVisible} onCancel={showModalSignin} footer={null}>
					{modalSignInContent}
				</Modal>
			</div>}
            <button className={styles.signin} onClick={showModalSignin} >Sign in</button>
          </div>
        </div>
      );

}

export default Login;
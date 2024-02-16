import styles from '../styles/Login.module.css';
import { useState } from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from './SignUp'
import SignIn from './SignIn'

function Login() {
    const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);
    const [isModalSignUpVisible, setIsModalSignUpVisible] = useState(false);
    const [isModalSigninVisible, setIsModalSignInVisible] = useState(false);


	const showModalSignup = () => {
		setIsModalSignUpVisible(!isModalSignUpVisible);
        //console.log(isModalSignUpVisible)
	};

    const showModalSignin = () => {
		setIsModalSignInVisible(!isModalSigninVisible);
        //console.log(isModalSigninVisible)
	};

    const modalSignUpContent = (
       < SignUp/>
        );

    const modalSignInContent = (
      < SignIn/>
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
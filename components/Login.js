import styles from '../styles/Login.module.css';

function Login() {
    
    return (
        <div className={styles.login}>
            <div className={styles.leftimage}>
                <img src='trucdegauche.jpg' />
            </div>
            <div className={styles.principal}>
                <img src="logo.png" className={styles.logo}/>
            </div>
        </div>
    )
}

export default Login;
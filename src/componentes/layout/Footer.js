import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (<footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin />
            </li>
            <li>
                <FaGithub />
            </li>
        </ul>
        <p className={styles.copy_right}><span>Eduardo</span> &copy; Costs</p>
    </footer>)
}

export default Footer
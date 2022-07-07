import { NavLink } from 'react-router-dom';

import { items } from './items';
import styles from './header.module.css';


function Header() {

    function getLinkClassname({ isActive }) {
        return isActive ? styles.isActive : styles.link;
     }
    
    const elements = items.map(({ id, text, to }) => <li key={id} className={styles.item}><NavLink className={getLinkClassname} to={to}>{text}</NavLink></li>)

    return (<header>
        <nav className={styles.nav}>
            <ul className={styles.list}>{elements}</ul>
        </nav>
    </header>)
 }
export default Header;
import { headerLogo } from '../assets/icons/images';
import { hamburger } from '../assets/icons';

const nav = () => {
  return (
    <header>
        <nav>
            <a href='/'>
            <img 
            src={headerLogo}
            alt="Logo"
            />
            </a>
        </nav>
    </header>
  )
}

export default nav
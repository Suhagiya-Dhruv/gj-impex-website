import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { RiContactsBook3Line } from "react-icons/ri";
import { contactUsSection } from '../../contant';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerSection}>
        <div className={styles.font}>
          <h3>Contact</h3>
          <div className={styles.cont}>
            <a className='flex items-center gap-2' href="mailto:info@bhimaniexports.com" ><FaLink />{contactUsSection.email}</a>
            <p className='flex items-center gap-2' ><FiPhone />{contactUsSection.phone1}</p>
            <p className='flex items-center gap-2' ><FiPhone />{contactUsSection.phone2}</p>
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <div className={styles.font}>
          <h3>Address</h3>
          <p className='flex items-center gap-2'> <IoLocationOutline className='text-7xl' />Head Office<br />
            {contactUsSection.address}</p>
        </div>
      </div>

      <div className={styles.footerSection}>
        <div className={styles.font}>
          <h3 className='flex items-center'>Quick Links</h3>
          <div className='flex flex-col gap-4'>
            <Link to="/products" className="text-gray-700 no-underline flex items-center gap-2"><MdProductionQuantityLimits className='text-2xl' />Products</Link>
            <Link to="/about" className="text-gray-700 no-underline flex items-center gap-2"><BsInfoCircle className='text-2xl' />About</Link>
            <Link to="/contact-us" className="text-gray-700 no-underline flex items-center gap-2"><RiContactsBook3Line className='text-2xl' />Contact Us</Link>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; GJ Impex. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

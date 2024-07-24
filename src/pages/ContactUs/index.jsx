import style from './style.module.css'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { contactUsSection } from '../../contant';
import logo from "../../assets/logo.png";

const Contact = () => {

  return (
    < >

      <div className={style.contact}>

        <div className={style.contact_Form1}>
          <div className={style.get_in}>
            <h2 >Get In Touch</h2>
            <h1 >{contactUsSection.companyName}</h1>
          </div>

          <div className={style.main_location}>
            <div className={style.location}>
              <div className={style.icon}><IoLocationOutline /></div>
              {contactUsSection.address}
            </div>

            <div className={style.contacts}>

              <div className={style.phon}>
                <div className={style.FiPhone}><FiPhone /></div>
                <a href='#'>{contactUsSection.phone1}</a>
              </div>

              <div className={style.phon}>
                <div className={style.FiPhone}><FiPhone /></div>
                <a href='#'>{contactUsSection.phone2}</a>
              </div>

              <div className={style.mail}>
                <div className={style.Mail}><HiOutlineMailOpen />
                </div><a href='#'>{contactUsSection.email}</a>
              </div>
            </div>
          </div>

          {/* <div className={style.media}>
            <div><FaFacebookF /></div>
            <div><FaYoutube /></div>
            <div><BsInstagram /></div>
            <div><BsTwitterX /></div>
          </div> */}
        </div>

        {/* <div className={style.contact_Form2}>
          <div className='flex gap-2'>
          <input type='text' name='first_name' placeholder='First name' className={`w-1/2 ${style.fonts}`}/>
          <input type="text" name="last_ name" placeholder="Last Name" className={`w-1/2 ${style.fonts}`} />
          </div>
          <input type="Email" name="email" placeholder="Email" className={style.fonts} />
          <input type="text" name="number" placeholder="Phone Number" className={style.fonts} />
          <input type="text" name="business_type" placeholder="Business" className={style.fonts}/>
          <input type="text" name="website" placeholder="Website Link" className={style.fonts}/>
          <input type="text" name="address" placeholder="Address" className={style.fonts}/>
          <div className='flex gap-2'>
          <input type='text' name='city' placeholder='City' className={`w-1/2 ${style.fonts}`}/>
          <input type="text" name="postal_code" placeholder="Postal Code" className={`w-1/2 ${style.fonts}`} />
          </div>
          <input type="text" name="state" placeholder="State" className={style.fonts}/>

          <textarea name="message" rows="10" cols="40" placeholder='Message' className={style.fonts}></textarea>
          <div className={style.send}><button className={style.btn}>Send</button></div>
        </div> */}
      </div>
    </>
  )
}

export default Contact;
import css from './Contact.module.css'
import { FaUser } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'

export default function Contact({ id, name, number, deleteContact }) {
return (
    <li className={css.item}>
        <div className={css.contacts}>
            <div> <FaUser className={css.icon}/>  {name} </div>
            <div> <FaPhone className={css.icon}/>  {number} </div>
            </div>
        <button className={css.button} onClick={() => deleteContact(id)}>Delete</button>
    </li>
    );
}


import Contact from "./Contact";
import css from './ContactList.module.css'

export default function ContactList ({ contacts, deleteContact })  {
    return (
    <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} deleteContact={deleteContact} />
        ))}
    </ul>
    );
};


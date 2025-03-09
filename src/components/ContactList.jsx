import Contact from "./Contact";

export default function ContactList ({ contacts, deleteContact })  {
    return (
    <ul>
        {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} deleteContact={deleteContact} />
        ))}
    </ul>
    );
};


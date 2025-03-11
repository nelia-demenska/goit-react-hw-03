import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css'

const UserSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'Must be min 3 chars')
    .required('Required'),
    number: Yup.string()
        .min(3)
        .required('Required'),
});

export default function ContactForm({addContact}) {
    
    return (
        <Formik
            initialValues={{
        name: '',
        number: '',
    }}
    validationSchema={UserSchema}
        onSubmit={(values, { resetForm }) => {
        addContact(values.name, values.number);
        resetForm();
    }}>
            
            <Form className={css.form}>
                <div className={css.group}>
        <label className={css.label}>Name:</label>
        <Field className={css.input} type="text" name="name" />
        <ErrorMessage
            className={css.error}
            name="name"
            component="span"
        />
                </div>
                
                <div className={css.group}>
        <label className={css.label}>Phone:</label>
        <Field className={css.input} type="tel" name="number" />
                    <ErrorMessage
                        className={css.error}
                        name="number"
                        component="span" />
                </div>

                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}
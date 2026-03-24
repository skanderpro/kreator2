import {useContext} from "react";
import {AppContext} from "../context/AppContext.js";
import {useCreateContactRequest} from "../api/contact-request.js";
import {useFormik} from "formik";

export const ContactForm = (props) => {
    const { setPopupConsultations, setPopupTy } =
        useContext(AppContext);
    const contactRequestCreator = useCreateContactRequest();
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            message: '',
        },
        validate: (values) => {
            const errors = {};

            if (!values.name?.trim()?.length) {
                errors.name = 'Поле ім\'я не може бути порожнім';
            } else if (!values.phone?.trim()?.length) {
                errors.phone = 'Поле телефон не може бути порожнім';
            } else if (!values.phone?.match(/^[+0-9]{10,}$/)) {
                errors.phone = 'Невірний формат телефону';
            }

            return errors;
        },
        onSubmit: async (values) => {
            const result = await contactRequestCreator.mutateAsync({...values});
            window.dataLayer = window.dataLayer || [];

            if (result && props.isStatic) {
                window.dataLayer.push({
                    'event': 'form_submission_success',
                    'form_type': 'footer_consultation',
                    'form_location': 'footer_static'
                });
            } else if (result) {
                window.dataLayer.push({
                    'event': 'form_submission_success',
                    'form_type': 'popup_consultation',
                    'form_location': 'header_popup'
                });
            }

            setPopupTy(true);
            setPopupConsultations(false);
            formik.resetForm();
        },
    })

    return (
        <form action="" onSubmit={formik.handleSubmit} className="questions-form">
            <div className="g-input">
                <label>Ваше ім'я</label>
                <input
                    type="text"
                    placeholder="Ваше ім’я"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    name="name"
                />
                {formik.errors.name && (
                    <div className="error-message">
                        {formik.errors.name}
                    </div>
                )}
            </div>
            <div className="g-input">
                <label>Телефон</label>
                <input
                    type="text"
                    placeholder="+38 (___) ___-__-__"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    name="phone"
                />
                {formik.errors.phone && (
                    <div className="error-message">
                        {formik.errors.phone}
                    </div>
                )}
            </div>
            <button className="btn" type="submit">
                Отримати консультацію
            </button>
        </form>
    );
}

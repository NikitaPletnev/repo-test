import * as React from "react";
import Button from "./Button";
import styles from "../styles/Form.module.css";
import {FormEvent} from "react";

interface FormInterface {
    onSubmit(formData: any): void;
}

const Form = ({onSubmit}: FormInterface) => {

    const getFormContent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target as any).entries());
        onSubmit(formData)
    }

    return (
        <form className={styles.form} onSubmit={getFormContent}>
            <span className={styles.label}>Product title: *</span>

            <input
                name='title'
                placeholder="Title..."
                defaultValue=""
                className={styles.input}
                required={true}
            />

            <span className={styles.label}>Product details: *</span>

            <input
                name='price'
                placeholder="Price..."
                defaultValue=""
                className={styles.input}
                required={true}
            />

            <textarea
                name='description'
                placeholder="Start typing product description here..."
                defaultValue=""
                className={styles.textarea}
                required={true}
            />

            <Button>Add a product</Button>
        </form>
    );
};

export default Form;

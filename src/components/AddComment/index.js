import React, { useState } from "react";
import css from "./AddComment.module.css";
import config from "../config";

const AddComment = props => {
    const [comment, setComment] = useState("");

    const handleChange = event => {
        const { value } = event.target;
        setComment(value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        // submit comment code
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className={css.comment}
                id="description"
                name="description"
                type="textarea"
                placeholder="what's going on?"
                required={true}
                wrap="soft"
                value={comment}
                onChange={handleChange}
            />
            <input
                className={css.submit}
                id="submit"
                name="submit"
                type="submit"
            />
        </form>
    );
};

export default AddComment;

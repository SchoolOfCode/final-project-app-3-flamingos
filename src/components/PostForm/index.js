import React, { useState } from "react";
import css from "./PostForm.module.css";

const PostForm = props => {
    const [description, setDescription] = useState("");

    const handleChange = event => {
        const { value } = event.target;
        setDescription(value);
    };

    const handleSubmit = event => {
        // code
    };

    return (
        <form className={css.container} onSubmit={handleSubmit}>
            <select name="type" className={css.type}>
                {/* <option value="event">Event</option>
                <option value="promotion">Promotion</option> */}
                <option value="travel">Travel Disruption</option>
                <option value="emergency">Medical Emergency</option>
                <option value="crime">Crime</option>
            </select>
            <input className={css.photo} id="photo" name="photo" type="file" />
            <input
                className={css.description}
                id="description"
                name="description"
                type="textarea"
                placeholder="what's going on?"
                required={true}
                wrap="soft"
                value={description}
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

export default PostForm;
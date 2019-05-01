import React from "react";
import css from "./PostForm.module.css";

const PostForm = props => {
    return (
        <form className={css.container}>
            <select name="type" className={css.type}>
                <option value="event">Event</option>
                <option value="promotion">Promotion</option>
                <option value="travel">Travel Disruption</option>
                <option value="emergency">Medical Emergency</option>
                <option value="crime">Crime</option>
            </select>
            <input className={css.photo} id="photo" name="photo" type="file" />
            <input
                className={css.desc}
                id="desc"
                name="desc"
                type="textarea"
                placeholder="what's going on?"
                required={true}
                wrap="soft"
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

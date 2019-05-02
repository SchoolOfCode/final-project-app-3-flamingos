import React, { useState, useRef } from "react";
import css from "./PostForm.module.css";

const PostForm = props => {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("travel");
    const fileInput = useRef(null);

    const handleChange = event => {
        const { value } = event.target;
        setDescription(value);
    };

    const handleSelect = event => {
        const { value } = event.target;
        setCategory(value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log({
            cat: category,
            file: fileInput.current.files[0].name,
            desc: description,
            location: { lat: props.lat, long: props.long }
        });
    };

    return (
        <form className={css.container} onSubmit={handleSubmit}>
            <select
                name="category"
                className={css.type}
                onChange={handleSelect}
                value={category}
            >
                {/* <option value="event">Event</option>
                <option value="promotion">Promotion</option> */}
                <option value="travel">Travel Disruption</option>
                <option value="emergency">Medical Emergency</option>
                <option value="crime">Crime</option>
            </select>
            <input
                className={css.photo}
                id="photo"
                name="photo"
                type="file"
                ref={fileInput}
            />
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

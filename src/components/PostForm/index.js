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
        console.log("url:", process.env.REACT_APP_API_URL);
        fetch(`${process.env.REACT_APP_API_URL}/posts`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: "5ccc5b9ed57c6c3d8812d9ea", // hard coded for now, to test
                imageUrl: "https://image.com",
                imageId: "123456",
                description: description,
                longitude: props.long,
                latitude: props.lat,
                postCategory: category
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
            .finally(() => {
                setDescription("");
                setCategory("travel");
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

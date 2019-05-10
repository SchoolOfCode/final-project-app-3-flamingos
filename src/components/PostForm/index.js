import React, { useState } from "react";
import css from "./PostForm.module.css";
import config from "../../config";

const PostForm = props => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("travel");
  const [file, setFile] = useState(null);

  const handleChange = event => {
    const { value } = event.target;
    setDescription(value);
  };

  const handleSelect = event => {
    const { value } = event.target;
    setCategory(value);
  };

  const handleFile = event => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleSubmit = async event => {
    event.preventDefault();

        const formData = new FormData();
        formData.append("file", file);
        formData.append("description", description);
        formData.append("longitude", props.long);
        formData.append("latitude", props.lat);
        formData.append("postCategory", category);

        fetch(
            `${config.API_URL}/posts?token=${localStorage.getItem("token")}`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json"
                    // "Content-Type": "multipart/form-data"
                },
                body: formData
            }
        )
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
                <option value="travel">Travel Disruption</option>
                <option value="emergency">Medical Emergency</option>
                <option value="crime">Crime</option>
            </select>
            <input
                className={css.file}
                id="file"
                name="file"
                type="file"
                onChange={handleFile}
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

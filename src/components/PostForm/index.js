import React, { useState } from "react";
import css from "./PostForm.module.css";
import config from "../../config";
import "../../index.css";
// import PText from "react-predictive-text";

const PostForm = props => {
    const categoryList = ["Bar", "Event", "Idea", "Restaurant", "Travel"]

    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("travel");
    const [file, setFile] = useState(null);
    const [isSending, setIsSending] = useState(false);
    // const [cloudData, setCloudData] = useState(false);

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
        setIsSending(true);
        try {
            let postBody = {
                token: localStorage.getItem("token"),
                postCategory: category,
                description: description,
                longitude: props.long,
                latitude: props.lat
            };
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                console.log("signing...");
                const signData = await fetch(config.SIGN_IMAGE).then(res =>
                    res.json()
                );
                formData.append("signature", signData.signature);
                formData.append("timestamp", signData.timestamp);
                formData.append("api_key", config.CLOUD_KEY);

                console.log("posting image...");
                const imageData = await fetch(`${config.CLOUD_URL}`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json"
                    },
                    body: formData
                }).then(res => res.json());
                if (imageData) {
                    postBody = {
                        ...postBody,
                        imageUrl: imageData.secure_url,
                        imageId: imageData.public_id
                    };
                }
                console.log("sending post...");
                const post = await fetch(`${config.POSTS_ADD}`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(postBody)
                }).then(res => res.json());
                if (post.postId) {
                    props.history.push(`/p/${post.postId}`);
                }
            } else {
                fetch(`${config.POSTS_ADD}`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(postBody)
                })
                    .then(res => res.json())
                    .then(post => {
                        if (post.postId) {
                            props.history.push(`/p/${post.postId}`);
                        }
                    })
                    .catch(err => console.error(err))
                    .finally(() => {
                        setDescription("");
                        setCategory("travel");
                        // setCloudData(false);
                        setIsSending(false);
                    });
            }
        } catch (err) {
            console.error(err);
        } finally {
            setDescription("");
            setCategory("travel");
            // setCloudData(false);
            setIsSending(false);
        }
    };

    return (
        <form className={css.container} onSubmit={handleSubmit}>
            {/* <PText

                options={[
                    'Macao',
                    'Macedonia, The Former Yugoslav Republic of',
                    'Madagascar',
                    'Malawi',
                    'Malaysia',
                    'Maldives',
                    'Mali',
                    'Malta',
                    'Marshall Islands',
                    'Martinique',
                    'Mauritania',
                    'Mauritius',
                    'Mayotte',
                    'Mexico',
                    'Micronesia, Federated States of',
                    'Moldova, Republic of',
                    'Monaco',
                    'Mongolia',
                    'Montserrat',
                    'Morocco',
                    'Mozambique',
                    'Myanmar'
                ]}

                onSelect={(country) => alert(country)}
                optionColor={'#95C8D8'}
                wrapperStyles={{
                    padding: '20px'
                }}
            /> */}
            <select
                name="category"
                className={css.type}
                onChange={handleSelect}
                value={category}
            >
                {categoryList.map(category => <option value={`${category}`}>{category}</option>)}
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
            {isSending ? (
                <input
                    className={css.sending}
                    id="sending"
                    value="Sending..."
                />
            ) : (
                    <input
                        className={css.submit}
                        id="submit"
                        name="submit"
                        type="submit"
                        value="Submit"
                    />
                )}
        </form>
    );
};

export default PostForm;

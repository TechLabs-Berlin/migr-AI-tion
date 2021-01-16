import React from "react";
import "./TagsInput.css";

export default function TagsInput(props) {
  const [tags, setTags] = React.useState([]);
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  return (
    <div className="tags-input">
      <ul>
        {tags.map((tag, index) => (
          <li className="tags-list" key={index}>
            <span className="tag-icon">{tag}</span>
            <button
              type="tags-cancel-button"
              onClick={() => {
                removeTags(index);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <br />
      <label for="tags-input-form">Tag(s)</label>
      <input
        name="tags-input-form"
        type="text"
        onKeyDown={(event) => addTags(event)}
        placeholder="Press enter to create a tag"
      />
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import "./PublishPost.css"

const PublishPost = () => {
  const { isLoggedIn } = useAuth();
  const [formData, setFormData] = useState({
    postedContent: null,
    description: "",
    caption: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "postedContent") {
      const selectedFile = files[0];
      if (selectedFile) {
        if (selectedFile.type.startsWith("image/")) {
          if (selectedFile.size > 10 * 1024 * 1024) {
            alert("Image file size should be less than 10MB");
            e.target.value = null;
            return;
          }
        } else if (selectedFile.type.startsWith("video/")) {
          if (selectedFile.size > 100 * 1024 * 1024) {
            alert("Video file size should be less than 100MB");
            e.target.value = null;
            return;
          }
        }
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: selectedFile,
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = new FormData();
      postData.append("postedContent", formData.postedContent);
      postData.append("description", formData.description);
      postData.append("caption", formData.caption);

      const response = await axios.post("https://fest-backend-wr4i.onrender.com/api/v1/posts", postData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Post created successfully:", response.data);
      setIsSubmitted(true);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Error publishing post:", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  if (isSubmitted) {
    return (
      <div className="success-message">
        <h2>Post created successfully!</h2>
        <p>Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="register-body">
      <div className="register-container">
        <h2 className="register-text">Publish Post</h2>
        <form onSubmit={handleSubmit} className="register">
          <div className="register-group">
            <label>Content (Image/Video):</label>
            <input
              required
              type="file"
              name="postedContent"
              accept="image/*, video/*"
              onChange={handleChange}
              className="select-dept"
            />
          </div>
          <div className="register-group">
            <label>Caption:</label>
            <input
              required
              type="text"
              name="caption"
              value={formData.caption}
              onChange={handleChange}
              className="select-dept"
            />
          </div>
          <div className="register-group">
            <label>Description:</label>
            <textarea
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="select-dept"
            />
          </div>

          <div className="buttons-container">
            <button type="submit" className="btn">
              Publish Post
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="btn cancel-button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublishPost;

import React from "react";
import ReactPlayer from "react-player";
import "./MediaPlayer.css"

const MediaPlayer = ({ content, description }) => {
  const isCloudinaryVideo =
    content.startsWith("http://res.cloudinary.com/") &&
    isVideoExtension(content);

  if (isCloudinaryVideo) {
    return (
      <ReactPlayer
        url={content}
        controls
        className="post-video"
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
      />
    );
  }

  if (!content.startsWith("http://res.cloudinary.com")) {
    return (
      <ReactPlayer
        url={content}
        controls
        className="post-video"
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
      />
    );
  }

  return <img src={content} alt={description} className="post-image" />;
};

const isVideoExtension = (url) => {
  const supportedExtensions = [
    ".mp4",
    ".webm",
    ".ogg",
    ".avi",
    ".mov",
    ".flv",
    ".mkv",
  ];
  const extension = url.split(".").pop().toLowerCase();
  return supportedExtensions.includes(`.${extension}`);
};

export default MediaPlayer;

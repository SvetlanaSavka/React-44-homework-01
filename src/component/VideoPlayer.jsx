import ReactPlayer from "react-player/toutube";

export const VideoPlayer = ({ url }) => {
  return (
    <div>
      <ReactPlayer url={url} control />
    </div>
  );
};

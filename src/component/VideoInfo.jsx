import { ActionsBar } from "./ActionsBar";

export const VideoInfo = ({ title, views, uploaDate }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <p>{views} views</p>
        <p>{uploaDate} views</p>
      </div>
      <ActionsBar />
    </div>
  );
};

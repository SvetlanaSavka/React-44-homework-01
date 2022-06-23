import { AppBar } from "./AppBar";
import { VideoInfo } from "./VideoInfo";
import { VideoPlayer } from "./VideoPlayer";

export const App = () => {
  return (
    <div>
      <AppBar />
      <VideoPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      <VideoInfo
        title="You Are Not Where You Think You Are"
        views={5709844}
        uploaDate="May 17, 2022"
      />
    </div>
  );
};

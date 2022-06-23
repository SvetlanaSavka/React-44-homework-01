import { BsDownload } from "react-icons/fa";

export const ActionsBar = () => {
  return (
    <div>
      <button>
        <BsDownload size="24" />
        Download
      </button>
      <button>
        <BsScissors />
        Clip
      </button>
    </div>
  );
};

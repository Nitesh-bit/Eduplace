import "./VideoPlayer.css";
import video from "../../edusity_assets/college-demo.mp4";
import { useRef } from "react";

export default function VideoPlayer({ playState, setPlayeState }) {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayeState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}

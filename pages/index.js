import { useEffect } from "react";
const numVids = 2;
export default function Home() {
  useEffect(()=>{
    const vid = document.getElementById("vid");
    let randomNum = Math.floor(Math.random() * numVids) + 1;
    vid.src = `./vid${randomNum}.mp4`;
      localStorage.setItem("lastRandomNum", randomNum);
  },[]);
  return (
    <div className="container">
      <main>
        <video loop controls id="vid"></video>
        <h3 style={{cursor:"pointer"}} onClick={()=>{
          location.reload();
        }}>reload the page to watch another video. we can only hope that our ginger overlord blesses us with even more videos in the future. <p>there are currently {numVids} videos in the archive</p></h3>
      </main>
    </div>
  );
}

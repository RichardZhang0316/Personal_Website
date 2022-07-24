import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

const textRef = useRef();

  useEffect(()=>{
    init(textRef.current,{
      showCursor:true,
      backDelay:1500,
      backSpeed:60,
      strings:["Student","Developer","Writer","Reader","INFP"],
    })
  },[])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/loukong.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Richard Zhang</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/xiala.svg" alt="" />
        </a>
      </div>
    </div>
  )
}
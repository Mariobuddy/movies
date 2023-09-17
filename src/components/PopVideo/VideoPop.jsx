import React,{useState,useEffect} from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

const VideoPop = ({ show, setShow, videoID, setVideoId, load, widthOne,widthTwo }) => {
  let del = () => {
    setShow(false);
    setVideoId(null);
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Wrapper style={{ display: show && videoID!==undefined ? "block" : "none" }}>
      {!load ? (
        <div className="mainDiv" onClick={del}>
          <span onClick={del}>Close</span>
          <ReactPlayer
            url={`url='https://www.youtube.com/watch?v=${videoID}'`}
            controls
            width={isMobile?widthTwo:widthOne}
            height={isMobile?"45%":widthOne}
          />
        </div>
      ) : (
        <div className="load"><p>Video Not Found</p></div>
      )}
    </Wrapper>
  );
};

export default VideoPop;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 88888;
  justify-content: center;
  align-items: center;
  background-color: #06060654;

  .visible {
    display: block;
  }

  .load{
    display: flex;
    justify-content: center !important;
    align-items: center !important;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
  .hide {
    display: none;
  }

  .mainDiv {
    display: flex;
    justify-content: center !important;
    align-items: center !important;
    width: 100%;
    height: 100%;
    flex-direction: column;
    

    span {
      font-size: 2rem;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s ease;
      position: relative;
      left: 31.5rem !important;
      color: #ffffff;

      &:hover {
        color: orangered;
      }
    }
  }

  @media (min-width:390px) and (max-width:768px){

  .visible {
    display: block;
  }

  .hide {
    display: none;
  }

  .mainDiv {
    display: flex;
    justify-content: center !important;
    align-items: center !important;
    

    span {
      font-size: 1.5rem;
      left: 14rem !important;
      
    }
  }


  }
`;

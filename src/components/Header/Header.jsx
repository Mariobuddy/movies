import React, { useState, useEffect, useCallback } from "react";
import { styled, keyframes } from "styled-components";
import Mario from "../../assests/mario.png";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [downInp, setDownInp] = useState(false);
  const [currentScroll, setCurrentScroll] = useState("top");
  const [lastScroll, setLastScroll] = useState(0);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  let navTitle = (title) => {
    if (title === "movies") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setShow(false);
  };

  let Toggle = () => {
    setShow(!show);
    setDownInp(false);
  };
  let downSearch = () => {
    setDownInp(true);
    setShow(false);
  };

  const scrollEffect = useCallback(() => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScroll && !downInp && !show) {
        setCurrentScroll("hide");
      } else {
        setCurrentScroll("show");
      }
    } else {
      setCurrentScroll("top");
    }
    setLastScroll(window.scrollY);
  }, [lastScroll, downInp, show]);

  useEffect(() => {
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, [scrollEffect]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Wrapper className={currentScroll}>
      <div className="left">
        <img alt="Mario" src={Mario} />
      </div>
      <div className="right">
        <ul className={show ? "visible anime" : ""}>
          <li onClick={() => navTitle("movies")}>Movies</li>
          <li onClick={() => navTitle("shows")}>TV Shows</li>
          <li>
            <BiSearch
              className="logo"
              style={{
                display: show ? "none" : "",
                color: downInp ? "red" : "",
              }}
              onClick={downSearch}
            />
          </li>
        </ul>
        <div
          className={downInp ? "downSearch anime2" : "downSearch"}
          style={{ display: downInp ? "block" : "none" }}
        >
          <input
            placeholder="Search for a movie or tv show..."
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter" && query.length > 0) {
                navigate(`/search/${query}`);
                setDownInp(false);
              }
            }}
          />
          <AiOutlineClose
            className="downLogo"
            onClick={() => setDownInp(false)}
          />
        </div>
        <div className="mobile">
          <BiSearch
            className="logo1"
            style={{ color: downInp ? "red" : "" }}
            onClick={downSearch}
          />
          {show ? (
            <AiOutlineClose className="logo1" onClick={Toggle} />
          ) : (
            <GiHamburgerMenu className="logo1" onClick={Toggle} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const ani = keyframes`
  0%{
    top: -20rem;
  }
  100%{
    top: 0rem;
  }
`;

const ani2 = keyframes`
  0%{
    top: -20rem;
  }
  100%{
    top: 5.5rem;
  }
`;

const Wrapper = styled.div`
  height: 5.5rem;
  width: 100%;
  z-index: 99999;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--wcol);
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25); /* Transparent background color */
  backdrop-filter: blur(
    3.5px
  ); /* Apply a blur filter to create the glass effect */

  .anime {
    animation: ${ani} 0.5s ease;
  }

  &.top {
    background: rgba(0, 0, 0, 0.25); /* Transparent background color */
    backdrop-filter: blur(3.5px);
  }

  &.show {
    background-color: #020110;
  }

  &.hide {
    transform: translateY(-6rem);
  }

  .anime2 {
    animation: ${ani2} 0.5s ease;
  }

  .visible {
    display: block !important;
  }

  .left {
    img {
      width: 6rem;
      height: 6rem;
      margin-top: 1.4rem;
    }
  }

  .right {
    width: 15%;
    .mobile {
      display: none;
    }
    .downSearch {
      position: absolute;
      height: 5.5rem;
      width: 100%;
      left: 0;
      top: 5.5rem;
      z-index: -1;

      input {
        width: 100%;
        height: 100%;
        padding: 0rem 4rem;
        outline: none;
      }

      .downLogo {
        color: black;
        font-size: 2.5rem;
        position: absolute;
        right: 5rem;
        top: 1.5rem;
        cursor: pointer;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        list-style-type: none;
        font-size: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease-in;
        &:hover {
          color: red;
        }

        .logo {
          font-size: 2rem;
          cursor: pointer;
        }
      }
    }
  }

  @media (min-width: 390px) and (max-width: 768px) {
    justify-content: space-between;
    padding: 0rem 1.5rem;

    .left {
      img {
      }
    }

    .right {
      height: 100%;
      .downSearch {
        input {
          padding: 0rem 2rem;
        }

        .downLogo {
          right: 2rem;
        }
      }
      .mobile {
        display: inline-flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;

        .logo1 {
          cursor: pointer;
          font-size: 2.5rem;

          &:nth-child(1) {
            margin-right: 1rem;
          }
        }
      }
      ul {
        display: none;
        position: absolute;
        background-color: var(--bg);
        padding-top: 5.5rem;
        padding-left: 1rem;
        height: 16.5rem;
        left: 0;
        top: 0;
        width: 100%;
        z-index: -5;
        li {
          justify-content: flex-start;
          align-items: flex-start;
          margin-top: 1.8rem;
        }
      }
    }
  }
`;

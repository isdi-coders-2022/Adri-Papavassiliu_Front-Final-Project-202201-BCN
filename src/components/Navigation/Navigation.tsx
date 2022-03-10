import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSquarePlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "@fontsource/montserrat-alternates";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  background-color: #157a6e;
  height: 69px;
  width: 100vw;
  position: fixed;
  align-items: center;
  display: flex;

  & ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    width: 100%;

    & li {
      font-size: 22px;
      font-family: Montserrat Alternates;
      font-weight: bold;

      & a {
        color: #ffffff;
        text-decoration: none;
      }
      & span {
        color: #eaa92a;
      }
    }
  }
`;

const Navigation = (): JSX.Element => {
  return (
    <>
      <Navbar className="nav-bar">
        <ul>
          <li className="account">
            <Link to={"/login"}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li className="logo">
            <Link to={"/home"}>
              <span>Video</span>games
            </Link>
          </li>
          <li>
            <Link to={"/my-videogames"}>
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>
          <li>
            <Link to={"/add-videogame"}>
              <FontAwesomeIcon icon={faSquarePlus} />
            </Link>
          </li>
        </ul>
      </Navbar>
    </>
  );
};

export default Navigation;

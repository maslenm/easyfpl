import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../actions/MenuAction";

const MobileNav = () => {
  const menu = useSelector((state) => state.menuOpen);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="mobile-nav-list__items">
        {NavItems.map((item, index) => {
          return (
            <li key={index} className="mobile-nav-list__item">
              <Link
                to={item.url}
                className={item.cName}
                onClick={() => dispatch(toggleMenu())}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MobileNav;

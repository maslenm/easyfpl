import { NavItems } from "./NavItems";

const MobileNav = () => (
  <>
    <ul className="mobile-nav-list__items">
      {NavItems.map((item, index) => {
        return (
          <li key={index} className="mobile-nav-list__item">
            <a className={item.cName} href={item.url}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  </>
);

export default MobileNav;

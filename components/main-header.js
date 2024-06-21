import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <NavLink href="/">NextNews</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

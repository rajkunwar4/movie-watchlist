import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <h1>rajstream</h1>
        <span>home</span>
        <span>categories</span>
        <span>watchlist</span>
        <div className="search">
          <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-4.png" className="user" alt="" />
          <img src="./search.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

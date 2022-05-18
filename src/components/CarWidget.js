import logo from '../cart.svg'; // Tell Webpack this JS file uses this image

function CarWidget() {
    return (
      <>
       <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="cart logo"></img>
        </>
        );
}

export default CarWidget;

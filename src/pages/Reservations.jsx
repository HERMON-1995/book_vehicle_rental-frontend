import MenuIcon from '../components/MenuIcon';
import SideBar from '../components/SideBar';

const Reservations = () => (
  <div className="drawer lg:drawer-open">
    {/* eslint-disable jsx-a11y/label-has-associated-control */}
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      <MenuIcon />
      {/* Page content here */}
      {/* <Reservation /> */}
      <h1 className="text-4xl">RESERVATIONS</h1>
    </div>
    <SideBar />
  </div>
);

export default Reservations;

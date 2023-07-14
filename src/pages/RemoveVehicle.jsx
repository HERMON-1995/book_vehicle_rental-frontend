import SideBar from '../components/SideBar';

const RemoveVehicle = () => (
  <div className="drawer lg:drawer-open">
    {/* eslint-disable jsx-a11y/label-has-associated-control */}
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      {/* Page content here */}
      {/* <RemoveVehicle /> */}
      <h1 className="text-4xl">REMOVE VEHICLE</h1>
    </div>
    <SideBar />
  </div>
);

export default RemoveVehicle;

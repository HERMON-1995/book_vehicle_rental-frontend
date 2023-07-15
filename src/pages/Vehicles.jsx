import Slider from '../components/Slider';
import MenuIcon from '../components/MenuIcon';
import SideBar from '../components/SideBar';

const Vehicles = () => (
  <div className="flex">
    <div className="lg:drawer-open">
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <MenuIcon />
      </div>
      <SideBar />
    </div>
    <div className="sliderWrapper">
      <Slider />
    </div>
  </div>
);

export default Vehicles;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../components/Slider';
import MenuIcon from '../components/MenuIcon';
import SideBar from '../components/SideBar';
import { fetchCars } from '../redux/slices/carSlice';

const Vehicles = () => {
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cars.length === 0) dispatch(fetchCars());
  }, [dispatch, cars.length]);
  return (
    // <div className="drawer lg:drawer-open">
    //   {/* eslint-disable jsx-a11y/label-has-associated-control */}
    //   <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content flex flex-col items-center justify-center">
    //     <MenuIcon />
    //     {/* Page content here */}
    //     {/* <AddVehicle /> */}
    //     <Slider />
    //   </div>
    //   <SideBar />
    // </div>
    <div className="flex">
      <div className="lg:drawer-open flex flex-col ">
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        {/* <div className="drawer-content">
        </div> */}
        <SideBar />
      </div>
      <div className="sliderWrapper flex flex-col">
        <MenuIcon />
        <Slider />
      </div>
    </div>
  );
};

export default Vehicles;

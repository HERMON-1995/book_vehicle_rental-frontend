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
};

export default Vehicles;

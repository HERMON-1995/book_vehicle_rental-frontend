import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import MenuIcon from '../components/MenuIcon';

const VehicleDetails = () => {
  const params = useParams();
  const car = useSelector((state) => state.cars.car[params.user_id]);
  const
    {
      name, photo, description, price, dateAdded, id,
    } = car;

  return (
    <div className="drawer lg:drawer-open">
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <MenuIcon />
        <div className="w-full flex">
          <div className="w-3/4 mt-24 ">
            <div className="w-full flex rounded-full justify-center items-center">
              <img src={photo} alt="not found" width="80%" height="50%" />
            </div>
          </div>
          <div className="w-1/3 text-end mt-24 pr-16 ">
            <h1 className="text-4xl font-bold">{name}</h1>
            <p className="text-sm text-justify">{description}</p>
            <ul>
              <li className="flex justify-between bg-base-200 p-2 text-black">
                <span className=" text-black">Price: </span>
                <span className=" text-black">
                  <small className="text-xl">$</small>
                  {price}
                </span>
              </li>
              <li className="flex justify-between  p-2 text-black">
                <span className=" text-black">Date Added: </span>
                <span className=" text-black">
                  {dateAdded}
                </span>
              </li>
              <li className="flex justify-between bg-base-200 p-2 text-black">
                <span className=" text-black">Duration: </span>
                <span className=" text-black">
                  {dateAdded}
                </span>
              </li>
            </ul>
            <br />
            <div>
              <div className="radial-progress bg-green-200 text-green-500 border-4 border-green-300" style={{ '--value': 100 }}>Cars</div>
            </div>
            <br />
            <Link
              type="submit"
              className="btn text-white bg-green-500 rounded-xl btn-lg hover:btn-outline"
              to={`/detail/${params.user_id}/reservation/${id}`}
            >
              Reserve
            </Link>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default VehicleDetails;

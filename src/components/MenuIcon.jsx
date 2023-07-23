import { AiOutlineMenuFold } from 'react-icons/ai';

const MenuIcon = () => (
  <>
    {/* eslint-disable jsx-a11y/label-has-associated-control */}
    <div className="navbar bg-base-100 shadow-xl mb-3 lg:hidden">
      <label htmlFor="my-drawer-2" className="btn btn-ghost normal-case text-xldrawer-button lg:hidden">
        <AiOutlineMenuFold className="text-2xl" />
      </label>
    </div>
  </>
);

export default MenuIcon;

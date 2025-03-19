import { BarChart2, Heart, ShoppingCart } from 'lucide-react';

const UserActions = () => {
  return (
    <div className="flex items-center gap-4 text-white">
      <span>Login/register</span>
      <span>
        <Heart />
      </span>
      <span>
        <BarChart2 />
      </span>
      <span>
        <ShoppingCart />
      </span>
      <span>$</span>0.00
    </div>
  );
};

export default UserActions;

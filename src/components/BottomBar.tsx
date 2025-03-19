import { Menu } from 'lucide-react';
import SelectInput from './form/SelectInput';

const BottomBar = () => {
  const selectItems = ['Deutsch', 'French', 'Requires Wpml Plugin'];
  return (
    <div className="container max-w-[1220] mx-auto">
      <SelectInput
        target="Browse Categories"
        options={selectItems}
        SIcon={Menu}
      />
    </div>
  );
};

export default BottomBar;

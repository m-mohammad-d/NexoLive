import { Actions } from "./actions";
import { Logo } from "./Logo";
export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#252731] z-49 px-2 lg:px-4 flex items-center justify-between shadow-md">
      <Logo />
      <Actions />
    </nav>
  );
};

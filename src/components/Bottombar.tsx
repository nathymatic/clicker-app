import { NavLink } from "react-router";

export function Bottombar() {
  return (
    <footer className="border-border bg-surface fixed inset-x-0 bottom-0 border-t">
      <nav aria-label="Main navigation">
        <ul className="flex items-center justify-evenly gap-8 py-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-[color,border-color,transform] text-accent hover:text-accent-hover hover:border-accent-hover border-b pb-1 duration-150 ease-out hover:scale-105 ${
                  isActive ? "border-accent" : "border-transparent"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `transition-[color,border-color,transform] text-accent hover:text-accent-hover hover:border-accent-hover border-b pb-1 duration-150 ease-out hover:scale-105 ${
                  isActive ? "border-accent" : "border-transparent"
                }`
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

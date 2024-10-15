import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.label,
        label: <NavLink to={`/${role}/${item.path}`}>{item.label}</NavLink>,
      });
    }

    if (item?.children) {
      acc.push({
        key: item.label,
        label: item.label,
        children: item.children.map((child) => ({
          key: child.label,
          label: <NavLink to={`/${role}/${child.path}`}>{child.label}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};

export default sidebarItemsGenerator;

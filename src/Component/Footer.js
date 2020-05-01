import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => {
  return (
    <div>
      <span> Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}> All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}> Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMLETED}>
        Completed
      </FilterLink>
    </div>
  );
};

export default Footer;

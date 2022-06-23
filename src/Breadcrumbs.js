import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";

const Breadcrumbs = () =>{
    const breadcrumbs = useReactRouterBreadcrumbs();
    console.log(breadcrumbs);

    const eachItem = breadcrumbs.map((breadcrumb) =>{
        return breadcrumb.location.state.name;
    })

    console.log(eachItem);

    return (
      <Fragment>
        {breadcrumbs.map(({ match, breadcrumb }, index) => (
          <span key={match.pathname}>
            {index > 0 && <> / </>}
            <NavLink to={match.pathname}>
              {index === 2 ? eachItem[2] : breadcrumb}
            </NavLink>
          </span>
        ))}
      </Fragment>
    );
}

export default Breadcrumbs;

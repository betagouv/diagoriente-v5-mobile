import React from 'react';
import { Link } from 'react-router-dom';
import { Theme } from 'requests/types';
import MySelection from 'components/common/MySelection/MySelection';
import useStyles from './styles';

interface Props {
  level: number;
  routes: { title: string; url: string }[];
  theme?: Omit<Theme, 'activities'> | null;
  activities?: string[];
}

const BreadCrumb = ({ level, routes, theme, activities }: Props) => {
  const classes = useStyles();
  let l = routes.length;
  return (
    <div className={classes.breadCrumb}>
      <div className={classes.routesContainer}>
        {routes.map((r, i) => (
          <>
            {i !== level - 1 ? (
              <Link to={r.url}>
                <span key={i} className={level - 1 === i ? classes.currentRoute : classes.route}>
                  {r.title}
                </span>
              </Link>
            ) : (
              <span key={i} className={level - 1 === i ? classes.currentRoute : classes.route}>
                {r.title}
              </span>
            )}
            {i < l - 1 && i < level - 1 && <span className={classes.route}> / </span>}
          </>
        ))}
      </div>
      {theme && <MySelection theme={theme} activities={activities} />}
    </div>
  );
};

export default BreadCrumb;

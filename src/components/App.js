import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesDetailsPage from '../pages/MoviesDetailsPage/MoviesDetailsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Nav from './Nav/Nav';
import Loader from './Loader/Loader';
import routes from '../routes/routes';

function App() {
  return (
    <div>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            path={routes.HOME_PAGE.path}
            exact
            component={routes.HOME_PAGE.component}
          />
          <Route
            path={routes.MOVIES_DETAILS_PAGE.path}
            component={MoviesDetailsPage}
          />
          <Route
            path={routes.MOVIES_PAGE.path}
            component={routes.MOVIES_PAGE.component}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

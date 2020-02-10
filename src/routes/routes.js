/* eslint-disable import/no-cycle */

import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MoviesDetailsPage = lazy(() =>
  import('../pages/MoviesDetailsPage/MoviesDetailsPage'),
);
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export default {
  HOME_PAGE: {
    path: '/',
    component: HomePage,
  },
  MOVIES_DETAILS_PAGE: {
    path: '/movies/:id',
    component: MoviesDetailsPage,
  },
  MOVIES_PAGE: {
    path: '/movies',
    component: MoviesPage,
  },
  CAST: {
    path: '/movies/:id/cast',
    component: Cast,
  },
  REVIEWS: {
    path: '/movies/:id/reviews',
    component: Reviews,
  },
  NOT_FOUND_PAGE: {
    component: NotFoundPage,
  },
};

import React from 'react';
import { matchRoutes, RouteObject, Location } from 'react-router';

export type LoadingRouteObject = RouteObject & {
  loading?: boolean;
}

interface RouteProps {
  caseSensitive?: boolean;
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  loading?: boolean;
  children?: React.ReactNode;
}

// adapted from original createRoutesFromChildren
// https://github.com/remix-run/react-router/blob/main/packages/react-router/lib/components.tsx
export function createRoutesFromChildren(children: React.ReactNode): LoadingRouteObject[] {
  const routes: LoadingRouteObject[] = [];

  React.Children.forEach(children, element => {
    if (!React.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === React.Fragment) {
      // Transparently support React.Fragment and its children.
      // eslint-disable-next-line prefer-spread
      routes.push.apply(routes, createRoutesFromChildren((element.props as RouteProps).children));
      return;
    }

    const route: LoadingRouteObject = {
      caseSensitive: (element.props as RouteProps).caseSensitive,
      element: (element.props as RouteProps).element,
      index: (element.props as RouteProps).index,
      path: (element.props as RouteProps).path,
      loading: (element.props as RouteProps).loading,
    };

    if ((element.props as RouteProps).children) {
      route.children = createRoutesFromChildren((element.props as RouteProps).children);
    }

    routes.push(route);
  });

  return routes;
}

export const isPathsDifferent = (first: Location, second: Location) =>
  first.pathname !== second.pathname;

export const isPathsEqual = (first: Location, second: Location) =>
  first.pathname === second.pathname;

export const isSearchDifferent = (first: Location, second: Location) =>
  first.search !== second.search;

export const isLoadable = (location: Location, routes: LoadingRouteObject[]) => {
  const matches = matchRoutes(routes, location);

  if (!matches || matches.length === 0)
    return false;

  const lastMatch = matches[matches.length - 1];
  return (lastMatch.route as LoadingRouteObject).loading;
};

import { COMPONENT_ID } from 'vue-transition-component';
import HomePage from 'page/HomePage';
import RoutePaths from 'data/enum/RoutePaths';
import RouteNames from 'data/enum/RouteNames';
import HomeStart from 'page/HomeStart';

export default [
  {
    path: RoutePaths.HOME,
    component: HomePage,
    name: RouteNames.HOME,
    props: { [COMPONENT_ID]: RouteNames.HOME },
  },
  {
    path: RoutePaths.START,
    component: HomeStart,
    name: RouteNames.START,
    props: { [COMPONENT_ID]: RouteNames.START },
  },
];

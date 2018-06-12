import { COMPONENT_ID } from 'vue-transition-component';
import HomePage from 'page/HomePage';
import RoutePaths from 'data/enum/RoutePaths';
import RouteNames from 'data/enum/RouteNames';
import HomeStart from 'page/HomeStart';
import HomeSecondPage from 'page/HomeSecondPage';

export default [
  {
    path: RoutePaths.START,
    component: HomeStart,
    name: RouteNames.START,
    props: { [COMPONENT_ID]: RouteNames.START },
    children: [
      {
        path: RoutePaths.HOME,
        component: HomePage,
        name: RouteNames.HOME,
        props: { [COMPONENT_ID]: RouteNames.HOME },
      },
      {
        path: RoutePaths.NEXT,
        component: HomeSecondPage,
        name: RouteNames.NEXT,
        props: { [COMPONENT_ID]: RouteNames.NEXT },
      },
    ],
  },
];

import { AbstractPageTransitionComponent } from 'vue-transition-component';
import HomeSecondPageTransitionController from './HomeSecondPageTransitionController';

export default {
  name: 'HomeSecondPage',
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HomeSecondPageTransitionController(this);
      this.isReady();
    },
  },
};

import { AbstractPageTransitionComponent } from 'vue-transition-component';
import PageOtherTransitionController from './PageOtherTransitionController';

export default {
  name: 'PageOther',
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new PageOtherTransitionController(this);
      this.isReady();
    },
  },
};

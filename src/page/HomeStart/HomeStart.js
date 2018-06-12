import { FlowManager, AbstractPageTransitionComponent } from 'vue-transition-component';
import HomeStartTransitionController from './HomeStartTransitionController';

export default {
  name: 'HomeStart',
  extends: AbstractPageTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HomeStartTransitionController(this);
      this.isReady();
    },
    onLeave(element, done) {
      FlowManager.transitionOut.then(() => FlowManager.done()).then(done);
    },
  },
};

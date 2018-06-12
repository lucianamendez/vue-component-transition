import { AbstractPageTransitionComponent, FlowManager, FlowType } from 'vue-transition-component';
import HomePageTransitionController from './HomePageTransitionController';

export default {
  name: 'HomePage',
  extends: AbstractPageTransitionComponent,
  create() {
    this.flow = FlowType.CROSS;
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HomePageTransitionController(this);
      this.isReady();
    },
    handleBack() {
      this.$router.go(-1);
    },
    onLeave(element, done) {
      FlowManager.transitionOut.then(() => FlowManager.done()).then(done);
    },
  },
};

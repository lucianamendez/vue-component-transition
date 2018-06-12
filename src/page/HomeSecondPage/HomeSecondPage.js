import { AbstractPageTransitionComponent, FlowManager, FlowType } from 'vue-transition-component';
import RouteNames from 'data/enum/RouteNames';
import HomeSecondPageTransitionController from './HomeSecondPageTransitionController';
import Button from './../../component/Button';

export default {
  name: 'HomeSecondPage',
  extends: AbstractPageTransitionComponent,
  components: {
    Button,
  },
  create() {
    this.flow = FlowType.CROSS;
    this.transitionOutAnimation = '';
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HomeSecondPageTransitionController(this);
      this.isReady();
    },
    onLeave(element, done) {
      FlowManager.transitionOut.then(() => FlowManager.done()).then(done);
    },
    handleBack() {
      this.$router.go(-1);
    },
    handleNext() {
      this.$router.push({
        name: RouteNames.NEXT,
      });
    },
  },
};

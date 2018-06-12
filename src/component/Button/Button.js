import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import ButtonTransitionController from './ButtonTransitionController';

export default {
  name: 'Button',
  extends: AbstractTransitionComponent,
  props: {
    text: VueTypes.string,
    goTo: VueTypes.any,
    color: VueTypes.string,
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new ButtonTransitionController(this);
      this.isReady();
    },
    handleBack() {
      if (this.goTo === 'back') {
        this.$router.go(-1);
      } else if (this.goTo === 'next') {
        this.$router.go(+1);
      } else {
        this.$router.go(+2);
      }
    },
  },
};

import { AbstractPageTransitionComponent, FlowManager, FlowType } from 'vue-transition-component';
import { mapGetters, mapMutations } from 'vuex';
import { PathsGetterTypes, PathsMutationTypes } from 'store/module/paths';
import RouteNames from 'data/enum/RouteNames';
import HomePageTransitionController from './HomePageTransitionController';
import Button from './../../component/Button';

export default {
  name: 'HomePage',
  extends: AbstractPageTransitionComponent,
  data() {
    return {};
  },
  components: {
    Button,
  },
  beforeRouteEnter(to, from, next) {
    if (to.name === 'home') {
      console.log(to.name);
      // KENYA --> this to.name must be store
    }
    next();
  },
  mounted() {},
  create() {
    this.flow = FlowType.CROSS;
    this.transitionOutAnimation = '';
    // KENYA --> maybe here or in mounted must be obtain to.name from store
  },
  methods: {
    // setTransitionIn() {
    //   this.transitionInAnimation = this.transitionInChoice;
    //   this.transitionController.setupTransitionInTimeline();
    // },
    handleAllComponentsReady() {
      this.transitionController = new HomePageTransitionController(this);
      this.isReady();
    },
    handleBack() {
      // change transition
      this.transitionOutAnimation = 'goBack';
      this.transitionController.setupTransitionOutTimeline();
      // then go
      this.$router.go(-1);
    },
    handleNext() {
      // change transition
      this.transitionOutAnimation = 'goNext';
      this.transitionController.setupTransitionOutTimeline();
      // then go
      this.$router.push({
        name: RouteNames.NEXT,
      });
    },
    handleOther() {
      // change transition
      this.transitionOutAnimation = 'goOther';
      this.transitionController.setupTransitionOutTimeline();
      // then go
      this.$router.push({
        name: RouteNames.OTHER,
      });
    },
    onLeave(element, done) {
      FlowManager.transitionOut.then(() => FlowManager.done()).then(done);
    },
  },
  computed: {},
};

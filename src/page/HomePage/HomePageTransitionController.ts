import { AbstractTransitionController } from 'vue-transition-component';
import { Power4 } from 'gsap';

class HomePageTransitionController extends AbstractTransitionController {
  /**
   * @public
   * @method setupTransitionInTimeline
   * @description Use this method to setup your transition in timeline
   **/
  protected setupTransitionInTimeline(): void {
    this.transitionInTimeline.from(
      this.viewModel.$el,
      2,
      {
        x: '-100%',
        ease: Power4.easeOut,
      },
      0,
    );
  }

  /**
   * @public
   * @method setupTransitionOutTimeline
   * @description Use this method to setup your transition out timeline
   **/
  protected setupTransitionOutTimeline(): void {}
}

export default HomePageTransitionController;

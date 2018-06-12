import { AbstractTransitionController } from 'vue-transition-component';
import { Power4 } from 'gsap';

class HomeSecondPageTransitionController extends AbstractTransitionController {
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
  protected setupTransitionOutTimeline(): void {
    const viewModel = this.viewModel.$el;
    const animation = this.viewModel['transitionOutAnimation'];

    switch (animation) {
      case 'goBack': {
        this.moveLeft(viewModel, '100%');
        break;
      }
      case 'goNext': {
        this.moveRight(viewModel, '-100%');
        break;
      }
      default: {
        break;
      }
    }
  }
  protected moveLeft(element, amount): void {
    this.transitionOutTimeline.to(
      element,
      2,
      {
        x: amount,
        ease: Power4.easeOut,
      },
      0,
    );
  }

  protected moveRight(element, amount): void {
    this.transitionOutTimeline.to(
      element,
      2,
      {
        x: amount,
        ease: Power4.easeOut,
      },
      0,
    );
  }
}

export default HomeSecondPageTransitionController;

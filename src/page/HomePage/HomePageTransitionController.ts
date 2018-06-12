import { AbstractTransitionController } from 'vue-transition-component';
import { Power4 } from 'gsap';

class HomePageTransitionController extends AbstractTransitionController {
  /**
   * @public
   * @method setupTransitionInTimeline
   * @description Use this method to setup your transition in timeline
   **/
  // protected setupTransitionInTimeline(): void {
  protected setupTransitionInTimeline(): void {
    const viewModel = this.viewModel.$el;
    // const animation = this.viewModel['transitionInAnimation'];
    this.transitionInTimeline.from(
      viewModel,
      2,
      {
        x: '-100%',
        ease: Power4.easeOut,
      },
      0,
    );
    // switch (animation) {
    //   case 'goBack': {
    //     this.moveLeft(viewModel, '-100%');
    //     break;
    //   }
    //   case 'goNext': {
    //     break;
    //   }
    //   default: {
    //     break;
    //   }
    // }
  }
  /**
   * @public
   * @method setupTransitionOutTimeline
   * @description Use this method to setup your transition out timeline
   **/

  // protected setupTransitionOutTimeline(): void {}
  //remove the protected to set differente transitions

  setupTransitionOutTimeline(): void {
    const viewModel = this.viewModel.$el;
    const animation = this.viewModel['transitionOutAnimation'];

    switch (animation) {
      case 'goBack': {
        this.moveLeft(viewModel, '-100%');
        break;
      }
      case 'goNext': {
        this.moveRight(viewModel, '+100%');
        this.fade(viewModel);
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
  protected fade(element): void {
    this.transitionOutTimeline.to(
      element,
      2,
      {
        opacity: 0,
        ease: Power4.easeOut,
      },
      0,
    );
  }
}
export default HomePageTransitionController;

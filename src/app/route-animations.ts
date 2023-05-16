import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slider = trigger('routeAnimations', [
  // transition('* => isLeft', slideTo('left')),
  // transition('* => isRight', slideTo('right')),
  // transition('isRight => *', slideTo('left')),
  // transition('isLeft => isRight', slideTo('right')),
  // transition('isLeft => isRight', slideTo('right')),
  transition('isLeft => isRight', [
    query(':enter, :leave', [
      style({
        position: 'fixed',
        width: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':enter', [animate('.5s ease-out', style({ right: '0%' }))]),
      query(':leave', [animate('.5s ease-out', style({}))]),
    ]),
    query(':enter', animateChild()),
  ]),

  transition('isRight => isLeft', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '0%', 'z-index': '9' })]),
    query(':leave', [style({ left: '0%', 'z-index': '999' })]),
    group([
      query(':enter', [
        animate('.5s ease', style({ left: '0%', 'z-index': '9' })),
      ]),
      query(':leave', [
        animate('.5s ease', style({ left: '100%', 'z-index': '999' })),
      ]),
    ]),
  ]),
  // transition('isRight => isLeft', [
  //   query(':enter, :leave', [
  //     style({
  //       position: 'fixed',
  //       width: '100%',
  //     }),
  //   ]),
  //   query(':enter', [style({ left: '-100%' })]),
  //   group([
  //     query(':leave', [animate('1400ms ease', style({}))]),
  //     query(':enter', [
  //       animate(
  //         '1400ms ease',
  //         style({
  //           left: '0%',
  //         })
  //       ),
  //     ]),
  //   ]),
  // ]),
]);

function slideTo(direction: any) {
  console.log(direction);

  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'fixed',
          top: 0,
          'background-color': 'red',

          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(
        ':leave',
        [
          animate(
            '1400ms ease',
            style({
              color: 'green',
            })
          ),
        ],
        optional
      ),
      query(':enter', [
        animate(
          '1400ms ease',
          style({
            'background-color': 'red',

            [direction]: '0%',
          })
        ),
      ]),
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}

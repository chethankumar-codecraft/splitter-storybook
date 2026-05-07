import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
    type="button"
    (click)="click.emit($event)"
    [class]="classes"
    [style]="{ 'background-color': backgroundColor }"
  >
    {{ label() }}
  </button>`,
})
export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  // @Input()
  // primary = false;
  primary = input(false);
  date = input<Date>(new Date());

  /** What background color to use */
  // @Input()
  // backgroundColor?: string;
  backgroundColor = input<string>();

  /** How large should the button be? */
  // @Input()
  // size: 'small' | 'medium' | 'large' = 'medium';
  size = input<'small' | 'medium' | 'large'>('medium');

  /**
   * Button contents
   *
   * @required
   */
  // @Input()
  // label = 'Button';

  label = input('Button');

  // /** Optional click handler */
  // @Output()
  // onClick = new EventEmitter<Event>();
  click = output<Event>();

  public get classes(): string {
    const base =
      'inline-block cursor-pointer border-0 rounded-full font-bold leading-none font-sans';

    const sizeClasses = {
      small: 'px-4 py-2.5 text-xs',
      medium: 'px-5 py-3 text-sm',
      large: 'px-6 py-3 text-base',
    }[this.size()];

    const modeClasses = this.primary()
      ? 'bg-[#555ab9] text-white'
      : ' border border-black/15 bg-transparent text-[#333]';

    return `${base} ${sizeClasses} ${modeClasses}`;
  }
}

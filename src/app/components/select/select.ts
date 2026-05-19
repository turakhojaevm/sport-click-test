import {
  Combobox,
  ComboboxInput,
  ComboboxPopup,
  ComboboxPopupContainer,
} from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  viewChild,
  viewChildren,
} from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-select',
  templateUrl: './select.html',
  styleUrl: './select.css',
  imports: [
    Combobox,
    ComboboxInput,
    ComboboxPopup,
    ComboboxPopupContainer,
    Listbox,
    Option,
    OverlayModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Select {
  listbox = viewChild<Listbox<{ name: string; count: number }[]>>(Listbox);
  options = viewChildren<Option<string>>(Option);
  combobox = viewChild<Combobox<string>>(Combobox);
  displayValue = computed((): any => {
    const values = this.listbox()?.values()[0] || null;
    return values ? values : this.labels[0];
  });
  labels = [
    {
      name: 'Все',
      count: 56,
    },
    {
      name: 'Хоккей',
      count: 23,
    },
    {
      name: 'Футбол',
      count: 67,
    },
  ];
  constructor() {
    afterRenderEffect(() => {
      const option = this.options().find((opt) => opt.active());
      setTimeout(() => option?.element.scrollIntoView({ block: 'nearest' }), 50);
    });
    afterRenderEffect(() => {
      if (!this.combobox()?.expanded()) {
        setTimeout(() => this.listbox()?.element.scrollTo(0, 0), 150);
      }
    });
  }
}

import { DialogRef, DIALOG_DATA } from "@angular/cdk/dialog";
import { Meta, Story, moduleMetadata } from "@storybook/angular";

import { ButtonModule, DialogModule } from "@bitwarden/components";

import { PreloadedEnglishI18nModule } from "../../../tests/preloaded-english-i18n.module";

import { CollectionEditDialogComponent } from "./collection-edit-dialog.components";

class DialogRefMock implements Partial<DialogRef> {}

export default {
  title: "Web/Collections/Edit dialog",
  component: CollectionEditDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [PreloadedEnglishI18nModule, DialogModule, ButtonModule],
      providers: [
        {
          provide: DialogRef,
          useClass: DialogRefMock,
        },
        {
          provide: DIALOG_DATA,
          useValue: {},
        },
      ],
    }),
  ],
  args: {},
} as Meta;

const Template: Story<CollectionEditDialogComponent> = (args: CollectionEditDialogComponent) => ({
  props: args,
  template: `<app-collection-edit-dialog></app-collection-edit-dialog>`,
});

export const Edit = Template.bind({});
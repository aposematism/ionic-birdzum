import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BirdviewPage } from './birdview';

@NgModule({
  declarations: [
    BirdviewPage,
  ],
  imports: [
    IonicPageModule.forChild(BirdviewPage),
  ],
})
export class BirdviewPageModule {}

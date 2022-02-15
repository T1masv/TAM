import { NgModule } from '@angular/core';
import { VideoComponent } from './video/video.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path : "videos", component : VideoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }

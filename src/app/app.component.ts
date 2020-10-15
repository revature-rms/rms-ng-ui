import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

constructor(private router: Router ) {

  router.events.subscribe((url:any) => {
  
  
  if(url instanceof NavigationEnd){
    console.log('yaay');
    console.log(router.url);
  };
  
  //console.log(Event + "<- THE EVENT " + url + "this this the url?" + router.url);

  });

}

  title = 'rms-ng-ui';
  opened = true;


}

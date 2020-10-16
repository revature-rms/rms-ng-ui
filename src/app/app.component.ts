import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'rms-ng-ui';
  opened = true;
  route;
  pageTitle;


constructor(private router: Router ) {

router.events.subscribe((url:any) => {

  if(url instanceof NavigationEnd){
    console.log("router url "+router.url);
    this.route = router.url;
    console.log("route " + this.route)
    this.pageTitle = this.getRouteTitle(this.route);
    console.log("pageTitle " + this.pageTitle);

  };
  });

}

getRouteTitle(route){

  console.log(route + " route in getRouteTitle");

  switch(route) { 
    case '/campuses': { 
       return 'Campuses'; 
    } 
    case '/tsm-dashboard': { 
       return 'Tsm Dashboard'
    }
    case '/tsm-employee-details': { 
      return 'Employe Details'
   } 
    default: { 
       return 'Unknown Route Title';
    } 
 } 
  

}


}

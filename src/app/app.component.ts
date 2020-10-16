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
    this.route = router.url;
    this.pageTitle = this.getRouteTitle(this.route);

  };
  });

}

getRouteTitle(route){

  
  switch(route) { 
    case '/campuses': { 
       return 'Campuses'; 
    } 
    case '/tsm-dashboard': { 
       return 'Tsm Dashboard'
    }
    case '/employee-details': { 
      return 'Employe Details'
    } 
    case '/room-details': { 
      return 'Room Details'
    }
    case '/login': { 
        return 'Login'
    }
    case '/room-edit': { 
      return 'Edit Room'
    }
    // case '/batch-details': { 
    //   return 'Batch Details'
    // }

    default: { 
       return 'Unknown Route Title';
    } 
 } 
  

}


}

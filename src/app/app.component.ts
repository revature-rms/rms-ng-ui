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
  
  const routes = ['/campus-details', '/building-details', '/building-edit', '/room-details', '/room-edit', '/employee-details', '/login']

  var rCd = /\/campus-details([0-9])*/g
  var rBd = /\/building-details([0-9])*/g
  var rBe = /\/building-edit([0-9])*/g
  var rRd = /\/room-details([0-9])*/g
  var rRe = /\/room-edit([0-9])*/g
  var rEd = /\/employee-details([0-9])*/g
  var rEe = /\/employee-edit([0-9])*/g
  var login = 'login';
  var dashboard = '/tsm-dashboard';
  

switch (true) { 
    case rBd.test(route): {
      return 'Building Details'
    }
    case rCd.test(route): { 
      return 'Campus Details'; 
    } 
    case (route == dashboard): { 
      return 'TSM Dashboard'
    }
    case (route == login): { 
      return 'Login'
    } 
    case rRd.test(route): { 
      return 'Room Details'
    }
    case rBe.test(route): {
        return 'Edit Building'
    }
    case rRe.test(route): { 
      return 'Edit Room'
    }
    case rEd.test(route): {
      return 'Employee Details'
    }
    case rEe.test(route): {
      return 'Employee Edit'
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

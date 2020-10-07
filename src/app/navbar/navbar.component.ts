import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  isTSM: boolean = false; //Training site manager
  isBMNGR: boolean = false; //Building manager
  isADMN: boolean = false; //Admin
  isTRNR: boolean = false; //Training manager
  loggedin: boolean = true; //default:false
  // currentUser: Principal = null;
  // currentUserSub: Subscription = null;

  constructor(private router: Router) { 
    let loggedin = true;


    //Following code handles navbar link logic:

    // this.currentUserSub = this.authService.currentUser$.subscribe(user => {
    //   this.currentUser = user;
    //   //this is all within the subscription, so should be updated anytime user info is updated
    //   if(user){
    //     console.log("Current user role: "+ this.currentUser.role);
    //     this.loggedin=true;
    //     console.log("Logged in: "+this.loggedin);
        
    //     //include logic for navbar links within this parent if statement
    //       //otherwise typescript will cry, cry, cry about null pointers like a baby
    //         //thank you typescript
    //     if(this.currentUser.role=="User"){
    //       this.isUser=true;
    //       console.log("Is User: "+this.isUser);
    //     } 
    //     if(this.currentUser.role=="Admin"){
    //       this.isAdmin=true;
    //       console.log("Is Admin: "+this.isAdmin);
    //     } 
    //     if(this.currentUser.role=="Manager"){
    //       this.isManager=true;
    //       console.log("Is Manager: "+this.isManager);
    //     } 
    //   } 
    // });


  }

  //========== Links =================

  //No registration in the user stories 
    //Home index should just include a small login component (separate)
  //Other pages should include specific links depending on user and user stories

  //debug links
  linksDebug = [
    {
      linkName: 'Home',
      fragment: '/dashboardTSM'
    },
    {
      linkName: 'test',
      fragment: '/somelink404'
    }
  ];

  //TSM
  linksTSM = [
    {
      linkName: 'Home',
      fragment: '/dashboardTSM'
    },
    {
      linkName: 'test',
      fragment: '/somelink404'
    }
  ];


  //========== Link Methods =================

  logout() { //todo: link with authService
    alert("Logout works!")
    // this.loggedin = !this.authService.logout();
    // if(!this.loggedin){
    //   this.isUser=false;
    //   this.isManager=false;
    //   this.isAdmin=false;
    // }
    // this.router.navigate(['']); //point this back home. OLD: '/login'
  }

  //========== HTML methods =================

  //this will include logic for collapsing/expanding sidebar, etc

  navOpen() {
    document.getElementById("navLinks").style.display = "block";
  }
  
  navClose() {
    document.getElementById("navLinks").style.display = "none";
  }

  //========== Misc methods =================

  ngOnDestroy(): void {
    // this.currentUserSub.unsubscribe();
  }

}

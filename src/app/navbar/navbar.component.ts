import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { link } from 'fs';
import { Subscription } from 'rxjs';
import { Principal } from '../dtos/principal';
import { AuthService } from '../services/auth.service';


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
  currentUser: Principal = null;
  currentUserSub: Subscription = null;
  navFocused: boolean = false;

  constructor(private router: Router, private authService: AuthService) { 

    this.currentUserSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      // Roles:
        // Admin
        // Training Site Manager
        // Building Manager
        // Trainer
        // Locked
      
      if(user){
        console.log("Current user role: "+ this.currentUser.role);
        this.loggedin=true;
        console.log("Logged in: "+this.loggedin);

        switch(this.currentUser.role){
          case "Admin": 
                        this.isADMN=true;
                        console.log("Is Admin: "+this.isADMN);
                        // break; // NO BREAKS: a user can have multiple roles
          case "Training Site Manager": 
                        this.isTSM=true;
                        console.log("Is TSM: "+this.isTSM);
          case "Building Manager":
                        this.isBMNGR=true;
                        console.log("Is BMNGR: "+this.isBMNGR);
          case "Trainer":
                        this.isTRNR=true;
                        console.log("Is Trainer: "+this.isTRNR);
          case "Locked":
                        this.loggedin=false; //force logout to invalidate session
                        console.log("Is Locked: "+this.loggedin);
                        console.log("Logging out... ");
                        // this.authService.logout(); // un-comment this once auth service is done
        }
      } 
    });


  }

  //========== Links =================

  //No registration in the user stories 
    //Home index should just include a small login component (separate)
  //Other pages should include specific links depending on user and user stories

  //debug links
  linksDebug = [
    {
      linkName: 'Home',
      fragment: '/tsm-dashboard'
    },
    {
      linkName: 'Campus Details',
      fragment: '/campus-details/1'
    },
    {
      linkName: 'Building Details',
      fragment: '/building-details/1'
    }
  ];

  //TSM
  linksTSM = [
    {
      linkName: 'Home',
      fragment: '/tsm-dashboard'
    },
    {
      linkName: 'Campus Details',
      fragment: '/campus-details/1'
    },
    {
      linkName: 'Building Details',
      fragment: '/building-details/1'
    }
  ];


  //========== Link Methods =================

  logout() { //todo: link with authService
    alert("Logging out!")
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
    document.getElementById("navOpener").style.display = "none";
    document.getElementById("navCloser").style.display = "block";
    this.navFocused=true;
  }
  
  navClose() {
    document.getElementById("navLinks").style.display = "none";
    document.getElementById("navOpener").style.display = "block";
    document.getElementById("navCloser").style.display = "none";
    this.navFocused=false;
  }

  //========== Misc methods =================

  ngOnDestroy(): void {
    // this.currentUserSub.unsubscribe();
  }

}

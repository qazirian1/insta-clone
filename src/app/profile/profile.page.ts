import { Component, OnInit, QueryList, ViewEncapsulation, ViewChildren, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, MenuController, Platform, IonRouterOutlet, AlertController, PopoverController, ModalController} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { environment } from "src/environments/environment";
import { CommonService } from "../../services/common.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  
   userDetail:any={
     name:"Dummy",
     image:"assets/images/default-profile.png",
     posts:"20",
     followers:"30",
     followings:"40"
   };
   constructor(private routeA: ActivatedRoute,public modalCtrl: ModalController, public zone: NgZone, private alertController: AlertController, private Activeroute: ActivatedRoute, private platform: Platform, private route: Router, private navCtrl: NavController, private authService: AuthService,private menuCtrl: MenuController, private commonService: CommonService,) { 


      this.routeA.queryParams.subscribe(params => {
        console.log(params);
        if (params && params.special) {
         let detail = JSON.parse(params.special);
         console.log(detail);
         this.userDetail={
           name:detail.userName,
           image:detail.userImage,
           posts:detail.post,
           followers:detail.followers,
           followings:detail.Following,
         };
        }
      })
  }


  ngOnInit() {
  }

}

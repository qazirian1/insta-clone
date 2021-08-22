import { Component, OnInit, QueryList, ViewEncapsulation, ViewChildren, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, MenuController, Platform, IonRouterOutlet, AlertController, PopoverController, ModalController} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { environment } from "src/environments/environment";
import { CommonService } from "../../services/common.service";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  allComments:any=[];
  constructor(private socialSharing: SocialSharing,private routeA: ActivatedRoute,public modalCtrl: ModalController, public zone: NgZone, private alertController: AlertController, private Activeroute: ActivatedRoute, private platform: Platform, private route: Router, private navCtrl: NavController, private authService: AuthService,private menuCtrl: MenuController, private commonService: CommonService, private popoverCtl: PopoverController) { 


    this.routeA.queryParams.subscribe(params => {
        console.log(params);
        if (params && params.special) {
          this.allComments = JSON.parse(params.special);
          console.log(this.allComments);
        }
      })
  }

  ngOnInit() {
  }

}

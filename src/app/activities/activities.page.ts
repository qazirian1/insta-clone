import { Component, OnInit, QueryList, ViewEncapsulation, ViewChildren, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController,IonSlides, MenuController, Platform, IonRouterOutlet, AlertController, PopoverController, ModalController} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { CommonService } from "../../services/common.service";
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

    
    postList:any=[];
    slideOpts = {
        initialSlide: 0,
        speed: 400
    };


    usersList:any=[];
    comment:any={
        image:"assets/images/default-profile.png",
        text:"",
    };
    activeIndex:any;
    showcommentbox:any=false;
    constructor(private socialSharing: SocialSharing,private keyboard: Keyboard,private routeA: ActivatedRoute,public modalCtrl: ModalController, public zone: NgZone,  private alertController: AlertController, private Activeroute: ActivatedRoute, private platform: Platform, private route: Router, private navCtrl: NavController, private authService: AuthService,private menuCtrl: MenuController, private commonService: CommonService, private popoverCtl: PopoverController) {
    }

  ngOnInit() {
    this.getusers();
    //this.Reloadposts();
    if(typeof localStorage.getItem('allposts')!="undefined" && localStorage.getItem('allposts')!=null && localStorage.getItem('allposts')!=''){
      this.postList=JSON.parse(localStorage.getItem('allposts'));
      console.log(this.postList);

    }else{
        this.Reloadposts();
    }
  }


  getusers(){
    this.usersList=[];
    var url = "https://randomuser.me/api/?page=1&results=2&seed=feed";
    console.log(url);
    this.authService.getData(url).subscribe(resp => {
      console.log(resp);
     this.usersList=resp['results'];
     console.log(this.usersList);
    }, (error) => {
        console.log(error);
    });
  }

  showpost(post,index){
      this.showcommentbox=false;
     // this.keyboard.hide();
  }
  addComment(feed,index){
      this.comment.image=feed.userImage;
      this.showcommentbox=true;
      this.activeIndex=index;
      this.comment.text="";
      
  }
    viewAllComments(feed,index){
        this.comment={
            image:"assets/images/default-profile.png",
            text:"",
        };
        this.showcommentbox=false;
       
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(feed)
            }
        };
        this.route.navigate(['./comments'],navigationExtras);
    }
  submitComment(){
    console.log(this.comment.text);
    if(this.comment.text!="" && this.comment.text!=null){
        this.postList[this.activeIndex].comments.push({text:this.comment.text,name:this.postList[this.activeIndex].userName,userimage:this.postList[this.activeIndex].userImage,reply:[]});
        localStorage.setItem('allposts',JSON.stringify(this.postList));
         this.comment.text="";
        this.showcommentbox=false;
        this.keyboard.hide();
    }
  }

  sharepost(feed,index){
      // Share via email
        this.socialSharing.share(feed.userName, null, [feed.image]).then(() => {
          // Success!
        }).catch(() => {
          // Error!
        });
  }
  Reloadposts(){
      this.postList = [
        {
            userName: 'David Nick',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_ilM7E3aZocNUE01o1Gd-zd7A8668HlWeIblKAqGLcG-2OO0o',
            userPlace: 'Houstan',
            image: 'https://picsum.photos/200/300',
            likes: 10,
            post:3,
            followers:20,
            Following:50,
            feedText: 'lorem ipsum',
            time: 'Just Now',
            comments:[]
        },
        {
            userName: 'John Watson',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbgRz3TYR0yIMijWAG4yM-wFl_SCit8aGNldLahP3kEIH1ODFx',
            userPlace: 'Mumbai',
            image: 'https://picsum.photos/id/237/200/300',
            likes: 323,
            post:30,
            followers:50,
            Following:60,
            feedText: 'From Mumbai',
            time: '3 Hours ago',
            comments:[]
        },
        {
            userName: 'Anderson',
            userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_k8OI5LCICslf_OzVMBzMMA7GblWc4iL0hCL0m7jXON3GNDwH',
            userPlace: 'Newyork',
            image: 'https://picsum.photos/seed/picsum/200/300',
            likes: 120,
            post:20,
            followers:80,
            Following:100,
            feedText: 'Lovely places',
            time: '3 Days ago',
            comments:[]
        }
    ];

    localStorage.setItem('allposts',JSON.stringify(this.postList));
  }


  showprofile(feed,index){
       this.showcommentbox=false;
        this.keyboard.hide();
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(feed)
            }
        };
        this.route.navigate(['./tabs/profile'],navigationExtras);
  }

}

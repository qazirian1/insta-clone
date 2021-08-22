import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ActivitiesPage = class ActivitiesPage {
    constructor(keyboard, routeA, modalCtrl, zone, alertController, Activeroute, platform, route, navCtrl, authService, menuCtrl, commonService, popoverCtl) {
        this.keyboard = keyboard;
        this.routeA = routeA;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.alertController = alertController;
        this.Activeroute = Activeroute;
        this.platform = platform;
        this.route = route;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.commonService = commonService;
        this.popoverCtl = popoverCtl;
        this.postList = [];
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
        this.usersList = [];
        this.comment = {
            image: "assets/images/default-profile.png",
            text: "",
        };
        this.showcommentbox = false;
    }
    ngOnInit() {
        this.getusers();
        // this.Reloadposts();
        if (typeof localStorage.getItem('allposts') != "undefined" && localStorage.getItem('allposts') != null && localStorage.getItem('allposts') != '') {
            this.postList = JSON.parse(localStorage.getItem('allposts'));
            console.log(this.postList);
        }
        else {
            this.Reloadposts();
        }
    }
    getusers() {
        this.usersList = [];
        var url = "https://randomuser.me/api/?page=1&results=2&seed=feed";
        console.log(url);
        this.authService.getData(url).subscribe(resp => {
            console.log(resp);
            this.usersList = resp['results'];
            console.log(this.usersList);
        }, (error) => {
            console.log(error);
        });
    }
    showpost(post, index) {
        this.showcommentbox = false;
        this.keyboard.hide();
    }
    addComment(feed, index) {
        this.comment.image = feed.userImage;
        this.showcommentbox = true;
        this.keyboard.show();
        this.activeIndex = index;
    }
    viewAllComments(feed, index) {
        this.comment = {
            image: "assets/images/default-profile.png",
            text: "",
        };
        this.showcommentbox = false;
        this.keyboard.hide();
    }
    submitComment() {
        console.log(this.comment.text);
        if (this.comment.text != "" && this.comment.text != null) {
            this.postList[this.activeIndex].comments.push({ text: this.comment.text, reply: [] });
            localStorage.setItem('allposts', JSON.stringify(this.postList));
            this.showcommentbox = false;
            this.keyboard.hide();
        }
    }
    Reloadposts() {
        this.postList = [
            {
                userName: 'David Nick',
                userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_ilM7E3aZocNUE01o1Gd-zd7A8668HlWeIblKAqGLcG-2OO0o',
                userPlace: 'Houstan',
                image: 'https://picsum.photos/200/300',
                likes: 10,
                feedText: 'lorem ipsum',
                time: 'Just Now',
                comments: []
            },
            {
                userName: 'John Watson',
                userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbgRz3TYR0yIMijWAG4yM-wFl_SCit8aGNldLahP3kEIH1ODFx',
                userPlace: 'Mumbai',
                image: 'https://picsum.photos/id/237/200/300',
                likes: 323,
                feedText: 'From Mumbai',
                time: '3 Hours ago',
                comments: []
            },
            {
                userName: 'Anderson',
                userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_k8OI5LCICslf_OzVMBzMMA7GblWc4iL0hCL0m7jXON3GNDwH',
                userPlace: 'Newyork',
                image: 'https://picsum.photos/seed/picsum/200/300',
                likes: 120,
                feedText: 'Lovely places',
                time: '3 Days ago',
                comments: []
            }
        ];
        localStorage.setItem('allposts', JSON.stringify(this.postList));
    }
};
ActivitiesPage = __decorate([
    Component({
        selector: 'app-activities',
        templateUrl: './activities.page.html',
        styleUrls: ['./activities.page.scss'],
    })
], ActivitiesPage);
export { ActivitiesPage };
//# sourceMappingURL=activities.page.js.map
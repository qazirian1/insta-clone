import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ToastController, LoadingController ,AlertController} from '@ionic/angular';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class CommonService {
    loading: any;
    constructor(private http: HttpClient,
        private router: Router, private toastr: ToastController,
        private loadingCtrl: LoadingController,public alertController: AlertController) {}


    async successToast(msg) {
        const toast = await this.toastr.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }
    async errorToast(msg) {
        const toast = await this.toastr.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }
    async warningToast(message) {
        const toast = await this.toastr.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }
    


    async presentLoading() {
        this.loading = await this.loadingCtrl.create({
            message: 'Loading...',
            
        });
        await this.loading.present();
    }
    async fetchDataLoader() {
        this.loading = await this.loadingCtrl.create({
            message: 'Fetching data...',
            
        });
        await this.loading.present();
    }
    async dismissLoading() {
        if (this.loading) await this.loading.dismiss();
    }
    async errorPresentAlert(msg) {
	    const alert = await this.alertController.create({
	      header: 'Error',
	      message: msg,
	      buttons: ['OK']
	    });
	    await alert.present();
	}


    async messagepresentAlert(msg) {
        const alert = await this.alertController.create({
          header: 'Error',
          message: msg,
          buttons: ['OK']
        });
        await alert.present();
    }
    async presentAlert(msg) {
	    const alert = await this.alertController.create({
	      header: 'Congratulation',
	      message: msg,
	      buttons: ['OK']
	    });
	    await alert.present();
	}

    async presentAlertAck(msg) {
        const alert = await this.alertController.create({
          header: 'Alert',
          message: msg,
          buttons: ['OK']
        });
        await alert.present();
    }




    //  async  captureImage() {
    //     const options: CameraOptions = {
    //       quality:50,
    //      destinationType : this.cameraPlugin.DestinationType.DATA_URL,
    //     sourceType : this.cameraPlugin.PictureSourceType.CAMERA,
    //     allowEdit : true,
    //     encodingType: this.cameraPlugin.EncodingType.JPEG,
    //     targetWidth: 500,
    //     targetHeight: 500,
    //     saveToPhotoAlbum: false
    //     }
    //     return await this.cameraPlugin.getPicture(options);
    // }
    //  async galleryImage() {
    //  const gallery: CameraOptions = {
    //     allowEdit: true,
    //     destinationType: this.cameraPlugin.DestinationType.DATA_URL,
    //     sourceType: this.cameraPlugin.PictureSourceType.PHOTOLIBRARY,
    //      encodingType: this.cameraPlugin.EncodingType.JPEG,
    //     mediaType: this.cameraPlugin.MediaType.PICTURE,
    //     quality:50,
    //     targetWidth: 500,
    //     targetHeight: 500,
    //   };
    //     return await this.cameraPlugin.getPicture(gallery);
    // }
   
    getWeekname(datevalue) {
        var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        var d = new Date(datevalue);
        return days[d.getDay()];
    }
    getMonthname(datevalue) {
        var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sep','Oct','Nov', 'Dec'];
        var d = new Date(datevalue);
        return month[d.getMonth()];
    }
     getdateNo(datevalue) {
        var d = new Date(datevalue);
        return d.getDate();
    }
    getFormattedDate(datevalue) {
        var date = new Date(datevalue);
        var year = date.getFullYear();
        
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        
        return year+'-'+month + '-' + day;
    }

    

    getFormattedDateEnglish(datevalue) {
        var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sep','Oct','Nov', 'Dec'];
        var date = new Date(datevalue);
        var year = date.getFullYear();
        // console.log(date.getDate());
        // console.log(date.getMonth());
        // console.log(year);
        return date.getDate()+' '+months[date.getMonth()] + ' ' + year;
    }


    getTime(datevalue) {
          var date = new Date(datevalue);   
         var hours = date.getHours();
          var minutes = date.getMinutes();
          var ampm = hours >= 12 ? 'pm' : 'am';
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          let minutess = minutes < 10 ? '0'+minutes : minutes;
          var strTime = hours + ':' + minutess + ' ' + ampm;
          return strTime;
    }


    convertCurrentTimeToUTC(_date){
        var date = new Date(_date);
        return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    }

    convertTimestamp(timestamp) {
        var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(), mm = ('0' + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2), // Add leading 0.
        hh = d.getHours(), h = hh, min = ('0' + d.getMinutes()).slice(-2), // Add leading 0.
        ampm = 'AM', time;
        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        }
        else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        }
        else if (hh == 0) {
            h = 12;
        }
        // ie: 2013-02-18, 8:35 AM  
        time = h + ':' + min + ' ' + ampm;
        return time;
    }
    convertdatetimestamp(timestamp) {
        var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(), mm = ('0' + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2), // Add leading 0.
        hh = d.getHours(), h = hh, min = ('0' + d.getMinutes()).slice(-2), // Add leading 0.
        ampm = 'AM', time;
        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        }
        else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        }
        else if (hh == 0) {
            h = 12;
        }
        // ie: 2013-02-18, 8:35 AM  
        time = dd + ' ' + month_names_short[parseInt(mm) - 1] + ' ' + yyyy;
        return time;
    }
    sortByKey(array, key) {
        return array.sort((a, b) => {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 0 : 1));
        });
    }
    sortByKeyy(array, key) {
        return array.sort((a, b) => {
            var x = a[key];
            var y = b[key];
            return ((x > y) ? -1 : ((x < y) ? 0 : 1));
        });
    }

     
    makeid(length) {
        var result           = [];
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result.push(characters.charAt(Math.floor(Math.random() * 
     charactersLength)));
       }
       return result.join('');
    }
        
   

    // dateFormat(date){
    //     return this.datePipe.transform(date, 'yyyy-MM-dd');
    // }
    // dateTimeFormat(date){
    //     return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm');
    // }

}
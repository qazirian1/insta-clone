import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CommonService = class CommonService {
    constructor(http, router, toastr, loadingCtrl, alertController) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
    }
    successToast(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastr.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    errorToast(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastr.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    warningToast(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastr.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    presentLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Loading...',
            });
            yield this.loading.present();
        });
    }
    fetchDataLoader() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Fetching data...',
            });
            yield this.loading.present();
        });
    }
    dismissLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.loading)
                yield this.loading.dismiss();
        });
    }
    errorPresentAlert(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Error',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    messagepresentAlert(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Error',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlert(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Congratulation',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlertAck(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
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
        var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
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
        return year + '-' + month + '-' + day;
    }
    getFormattedDateEnglish(datevalue) {
        var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = new Date(datevalue);
        var year = date.getFullYear();
        // console.log(date.getDate());
        // console.log(date.getMonth());
        // console.log(year);
        return date.getDate() + ' ' + months[date.getMonth()] + ' ' + year;
    }
    getTime(datevalue) {
        var date = new Date(datevalue);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        let minutess = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutess + ' ' + ampm;
        return strTime;
    }
    convertCurrentTimeToUTC(_date) {
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
        var result = [];
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }
        return result.join('');
    }
};
CommonService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CommonService);
export { CommonService };
//# sourceMappingURL=common.service.js.map
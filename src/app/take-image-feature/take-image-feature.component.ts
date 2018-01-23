import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var Camera;
declare var navigator;

@Component({
  selector: 'app-take-image-feature',
  templateUrl: './take-image-feature.component.html',
  styleUrls: ['./take-image-feature.component.css']
})
export class TakeImageFeatureComponent implements OnInit {
  public imgOptions: any;
  public image: string;
  public TakeImage: any;
  public selfieImage: string;

  constructor(private DomSanitizer: DomSanitizer) { }

  ngOnInit() {
    // this.imgOptions = {
    //   quality: 100,
    //   destinationType: Camera.DestinationType.DATA_URL,
    //   sourceType: Camera.PictureSourceType.CAMERA,
    //   allowEdit: false,
    //   correctOrientation: true,
    //   encodingType: Camera.EncodingType.JPEG,
    //   mediaType: Camera.MediaType.PICTURE,
    //   // targetWidth: 1024,
    //   // targetHeight: 768,
    //   cameraDirection: Camera.Direction.FRONT,
    //   saveToPhotoAlbum: false
    // };

    // this.callCamera();
  }

  takeRegistrationSelfie() {
    alert('taking selfie');
    navigator.camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000,
        correctOrientation: true,
        cameraDirection: 1
    }).then((imageData) => {
    this.selfieImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
        alert(err);
    });
  }

  callCamera() {
    navigator.camera.getPicture(this.imgSuccess, this.imgFail, this.imgOptions);
  }

  imgSuccess(imageData) {
    alert('image taken!');
    this.image = 'data:image/jpeg;base64,' + imageData;
    console.log(this.image);
    alert(this.image);
  }

  imgFail(msg) {
    alert('Failed to get image');
  }

}

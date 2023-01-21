import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  s3Images:any;
  googleImages:any;
  showS3 = true;

  constructor(private imagesData:ImagesService, private _router:Router)
  {
    imagesData.getS3Image().subscribe((res:any)=>{
      this.s3Images = JSON.parse(res).data;
    },(err)=>{
      console.log(err.message);
      this._router.navigate(['/login']);
    });
    imagesData.getGoogleImage().subscribe((res:any)=>{
      this.googleImages = JSON.parse(res).data;
    },(err)=>{
      console.log(err.message);
      this._router.navigate(['/login']);
    })
  }
  toogle(val:string, s3:any, google:any)
  {
    if(val === 's3')
    {
      this.showS3 = true;
      s3.classList.add('active');
      google.classList.remove('active');
    }
    else 
    {
      this.showS3 = false;
      s3.classList.remove('active');
      google.classList.add('active');
    }
    
  }
}

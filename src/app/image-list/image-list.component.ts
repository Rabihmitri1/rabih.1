import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[]=[];
  searchQuery:string='';
  imagesFound: boolean = false;
  searching: boolean = false;

  handleSuccess(data: any){
    this.images=[]
    this.imagesFound=true; 
  data.forEach((element: any) => {
   return this.images.push(element);
  });
  this.searching = false;
  }

  handleError(error: any){
    console.log(error);
  }

  constructor(private _imageService : ImageService) { 
    
  }

  SearchImages(query: string){
    this.searching = true;
    return this._imageService.getImage(this.searchQuery).subscribe({
      next:(data: any)=> this.handleSuccess(data.hits),
      error: this.handleError.bind(this)
   });
    
   
  }

  ngOnInit() {
  }

}
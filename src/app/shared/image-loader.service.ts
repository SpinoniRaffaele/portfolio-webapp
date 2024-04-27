import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {

  preloadedImagesList: string[] = [
    'assets/images/backend-dev.png',
    'assets/images/background_projects.png',
    'assets/images/background_quick-links.png',
    'assets/images/big-dev-screen.jpeg',
    'assets/images/eze-sunset.jpg',
    'assets/images/github.png',
    'assets/images/googlePlayBadge.png',
    'assets/images/instagram_logo.png',
    'assets/images/linkedin_circle_logo.png',
    'assets/images/medium_logo.png',
    'assets/images/Medium_logo.webp',
    'assets/images/mountain.jpg',
    'assets/images/polimi.jpg',
    'assets/images/ski.jpg'
  ];

  constructor() { }

  loadImage(path: string) {
    const imageBlob = localStorage.getItem(path);
    if (imageBlob) {
      return imageBlob;
    } else {
      return path;
    }
  }


  preloadImages() {
    this.preloadedImagesList.forEach((imagePath) => {
      this.pushImageInLocalStorage(imagePath);
    });
  }

  pushImageInLocalStorage(path: string) {
    var xhr = new XMLHttpRequest(),
        blob,
        fileReader = new FileReader();

    xhr.open("GET", path, true);
    xhr.responseType = "arraybuffer";
    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            blob = new Blob([xhr.response], {type: "image/png"});
            fileReader.onload = function (evt) {
              if (evt.target?.result) {
                var result = evt.target.result as string;
                localStorage.setItem(path, result);
              }
            };
            fileReader.readAsDataURL(blob);
        }
    }, false);
    xhr.send();
  }

  emptyLocalStorage() {
    localStorage.clear();
  }
}

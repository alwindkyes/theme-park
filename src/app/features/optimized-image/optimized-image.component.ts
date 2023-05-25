import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Products {
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  id: number,
  images: string[],
  price: number,
  rating: number,
  stock: number,
  thumbnail: string,
  title: string
}

@Component({
  selector: 'app-optimized-image',
  templateUrl: './optimized-image.component.html',
  styleUrls: ['./optimized-image.component.scss']
})
export class OptimizedImageComponent implements OnInit {

  products: Products[] = [];
  images: string[] = [
    'https://i0.wp.com/sportzwiki.com/wp-content/uploads/2023/03/wwe-nxt-roxst.jpg?w=941&ssl=1',
    'https://library.sportingnews.com/2022-03/nxt%20stand%20and%20deliver%2022.jpeg',
    'https://pbs.twimg.com/media/FOf7AD4XEAMdjpw?format=jpg&name=large',
    'https://pbs.twimg.com/media/FrywyxaWIAA7z6N?format=jpg&name=large',
    'https://pbs.twimg.com/media/FrytVSAWIAAa-xJ?format=jpg&name=large'
  ];

  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    // this.getImages();
    console.log('images', this.images);
  }

  getImages() {
    const url = 'https://dummyjson.com/products/1';
    this.httpClient.get(url).subscribe({
      next: (response: any) => {
        response.images.forEach((element: any) => {
          this.images.push(element);
        });
      },
      error: () => {

      }
    })
  }
}

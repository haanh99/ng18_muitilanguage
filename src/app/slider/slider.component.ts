import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
 @Input() content: any[]=[];

 currentIndex = 0;
  //  cards = [
  //   {
  //     category: 'home.card1.title', // Sử dụng key tương ứng từ file ngôn ngữ
  //     content: 'home.card1.content',
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJM7t5fRSAoRLinzYXnu-XayNvd6eCdDRjA&s',
  //   },
  //   {
  //     category: 'home.card2.title',
  //     content: 'home.card2.content',
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVotD32cKe8P4Xcf86-qMt6mKIbAH9YWw12A&s",
  //   },
  //   {
  //     category: 'home.card3.title',
  //     content: 'home.card3.content',
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeliGfO1bqK4xoRB_jAY83PmBbR13akTTrqQ&s",
  //   },
  // ];
  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.content.length;
    }, 3000);
  }

}

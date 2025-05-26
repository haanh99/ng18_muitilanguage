
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import '../external/finisher-header.es5.min.js';
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    const FinisherHeader: any = (window as any).FinisherHeader;
    new FinisherHeader({
  "count": 90,
  "size": {
    "min": 1,
    "max": 20,
    "pulse": 0
  },
  "speed": {
    "x": {
      "min": 0,
      "max": 0.4
    },
    "y": {
      "min": 0,
      "max": 0.1
    }
  },
  "colors": {
    "background": "#2558a2",
    "particles": [
      "#ffffff",
      "#87ddfe",
      "#acaaff",
      "#1bffc2",
      "#f88aff"
    ]
  },
  "blending": "screen",
  "opacity": {
    "center": 0,
    "edge": 0.4
  },
  "skew": 0,
  "shapes": [
    "c",
    "s",
    "t"
  ]
});
  }
  cards = [
    {
      category: 'home.card1.title', // Sử dụng key tương ứng từ file ngôn ngữ
      content: 'home.card1.content',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJM7t5fRSAoRLinzYXnu-XayNvd6eCdDRjA&s',
    },
    {
      category: 'home.card2.title',
      content: 'home.card2.content',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVotD32cKe8P4Xcf86-qMt6mKIbAH9YWw12A&s",
    },
    {
      category: 'home.card3.title',
      content: 'home.card3.content',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeliGfO1bqK4xoRB_jAY83PmBbR13akTTrqQ&s",
    },
  ];

}

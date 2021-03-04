import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// NASA https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2021-03-01&end_date=2021-03-03
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],


})

export class DataComponent implements OnInit {


  startDate = diasAtras;
  endDate = today;


  key = "1MFGbGrschgFIobgt1ZcczMbNiZE5qOw8OXdfpaQ";
  url = 'https://api.nasa.gov/planetary/apod?api_key=' + this.key + '&start_date=' + this.startDate + '&end_date=' + this.endDate;

  allDataNasa;
  constructor(private http: HttpClient) {

    this.http.get(this.url).toPromise().then((data: any) => {
      console.log(data);
      this.allDataNasa = data;
      console.log(this.startDate);
      console.log(this.endDate);
      console.log(this.url);
    });
  }



  slideIndex = 1;
  token;

  ngOnInit(): void {
    this.token = localStorage.getItem('tokenLogin');
    this.showSlides(this.slideIndex);

  }
  switchTabs(tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    document.getElementById(tab).style.display = "block";

  }
  //SLIDESHOW



  showSlides(n) {
    var i;


    var slides = Array.from(document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>)
    var dots = Array.from(document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>)
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }


}

let today = new Date().toISOString().slice(0, 10);

const date = new Date();
date.setDate(date.getDate() - 2);

let diasAtras = date.toISOString().slice(0, 10);


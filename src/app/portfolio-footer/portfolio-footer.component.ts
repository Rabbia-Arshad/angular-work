import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-footer',
  templateUrl: './portfolio-footer.component.html',
  styleUrls: ['./portfolio-footer.component.css']
})
export class PortfolioFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      //Get the button:
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

  }

}

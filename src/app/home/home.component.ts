import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  icontheme = "";
  theme = true;
  list = [{
    "title": "ANGULAR",
    "image": "angular",
    "text": "Framework Front-End modular y escalable el cual facilita la creación de aplicaciones web.",
    "technologies": [{
      "title": "HTML5",
      "icon": "fa-brands fa-html5"
    },{
      "title": "CSS",
      "icon": "fa-brands fa-css3-alt"
    },{
      "title": "JS",
      "icon": "fa-brands fa-square-js"
    }]
  },{
    "title": "SPRINGBOOT",
    "image": "spring",
    "text": "Framework Back-End basado en java, usado para la creación de microservicios.",
    "technologies": [{
      "title": "JAVA",
      "icon": "fa-brands fa-java"
    },{
      "title": "SQL",
      "icon": "fa-solid fa-database"
    }]
  }]

  ngOnInit(): void {
    let tag = document.getElementById("nav-home");
    
    this.icontheme = "fa-solid fa-moon";

    let url = window.location.href;
    
    if(url.includes("page1")){
      tag = document.getElementById("nav-home")
    } else if(url.includes("page2")){
      tag = document.getElementById("nav-about")
    } else if(url.includes("page3")){
      tag = document.getElementById("nav-technologies")
    } else if(url.includes("page4")){
      tag = document.getElementById("nav-projects")
    } else if(url.includes("page5")){
      tag = document.getElementById("nav-contact")
    }

    tag?.classList.add('clicked');
  }

  clicked(name: string, container: string){
    const el = document.querySelectorAll('.selector');
    const conten = document.querySelectorAll('.content');
    let tag = document.getElementById(name);
    let containerFound = document.getElementById(container);
    console.log(tag);

    if(el!=null){
     
      el.forEach(e =>{
        e.classList.remove('clicked');
      }
      )

      conten.forEach(e=>{
        e.classList.remove('animado');
      })
    }

    tag?.classList.add('clicked');
    containerFound?.classList.add('animado');
    
  }

  changeTheme(){
    document.body.classList.toggle("darkmode");
    
    this.icontheme = "fa-solid fa-sun";
    this.theme = !this.theme;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {

  skills: any[] = [
    {
      "name": "angular",
      "src": "../../../../assets/img/skills/angular-logo.svg",
      "style": "",
      "experience": " I was responsible for developing an entity access application that allows users to manage access permissions for various entities within a large organization. I was involved in the project from inception to deployment, and I played a critical role in the design, development, and testing phases. I leveraged my expertise in Angular, TypeScript, HTML, and CSS to build a highly interactive and user-friendly interface that enabled users to easily manage access permissions for various entities. I utilized the Angular framework to create a modular and scalable architecture that allowed for easy maintenance and future enhancements."
    },
    {
      "name": "react",
      "src": "../../../../assets/img/skills/React-icon.svg.png",
      "style": ""
    },
    {
      "name": "javascript",
      "src": "../../../../assets/img/skills/javascript.png",
      "style": ""
    },
    {
      "name": "bootstrap",
      "src": "../../../../assets/img/skills/bootstrap.png",
      "style": ""
    },
    {
      "name": "nodejs",
      "src": "../../../../assets/img/skills/nodejs.svg",
      "style": ""
    },
    {
      "name": "html",
      "src": "../../../../assets/img/skills/htmllogo.svg",
      "style": ""
    },
    {
      "name": "CSS",
      "src": "../../../../assets/img/skills/CSS3logo.png",
      "style": ""
    },
    {
      "name": "springboot",
      "src": "../../../../assets/img/skills/springio-icon.svg",
      "style": "background-color: white; border-radius: 50%;"
    },
    {
      "name": "java",
      "src": "../../../../assets/img/skills/java.svg",
      "style": ""
    },
    {
      "name": "python",
      "src": "../../../../assets/img/skills/Python-logo-notext.svg.png",
      "style": ""
    },
    {
      "name": "Maven",
      "src": "../../../../assets/img/skills/maven-logo-black-on-white.png",
      "style": "background-color: white; align-self:center"
    },
    {
      "name": "PostgreSQL",
      "src": "../../../../assets/img/skills/PostgreSQL.png",
      "style": ""
    },
    {
      "name": "Elasticsearch",
      "src": "../../../../assets/img/skills/elasticsearch.svg",
      "style": "background-color: white; border-radius: 5%; padding:5px"
    },
    {
      "name": "Kibana",
      "src": "../../../../assets/img/skills/kibana.svg",
      "style": ""
    },
    {
      "name": "Microsoft",
      "src": "../../../../assets/img/skills/microsoft.png",
      "style": ""
    },
    {
      "name": "ASP.Net Core",
      "src": "../../../../assets/img/skills/dotnetCore.png",
      "style": "background-color: white; border-radius: 50%;"
    },
    {
      "name": "typescript",
      "src": "../../../../assets/img/skills/Typescript.png",
      "style": ""
    },
    {
      "name": "C#",
      "src": "../../../../assets/img/skills/csharp.png",
      "style": "background-color: white; border-radius: 50%;"
    },
    {
      "name": "jquery",
      "src": "../../../../assets/img/skills/jquery.png",
      "style": ""
    },
    {
      "name": "swagger",
      "src": "../../../../assets/img/skills/Swagger.png",
      "style": ""
    },
    {
      "name": "postman",
      "src": "../../../../assets/img/skills/postman.png",
      "style": "background-color: white; border-radius: 50%;"
    },
    {
      "name": "mongodb",
      "src": "../../../../assets/img/skills/mongodb.svg",
      "style": ""
    },
  ];

  ngOnInit(): void {


  }


}

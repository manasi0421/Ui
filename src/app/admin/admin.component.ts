// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent {

// }


import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

 

 

@Component({

  selector: 'app-admin',

  templateUrl: './admin.component.html',

  styleUrls: ['./admin.component.css']

})

export class AdminComponent implements OnInit {

 

  constructor(private http: HttpClient){}

 

  ngOnInit(): void {

   

  }

 

  file: any;

  flag = true;

  fileUrl: string = "https://localhost:7272/api/Employee/upload";

 

 

  selectFile(event: any){

    this.file = event.target.files[0];

 

  }

 

  uploadFile(){

    let formdata = new FormData;

    formdata.append("file", this.file);

    this.http.post(this.fileUrl, formdata).subscribe(

      data=>{

        console.log(data);

 

      },

      (error)=>{

        console.log(error);

 

      }

    )

 

  }

 

}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  postData = {
    mail: "testdeveloper@barracks.gg",
    password: "testdeveloper"
  };

  url = 'https://beta-api.barracks.gg/v2/Auth/Authenticate';

  token;
  constructor(private http: HttpClient) {
    this.http.post(this.url, this.postData).toPromise().then((data: any) => {
      console.log(data);

      this.token = Object.values(data);
    });

  }
  ngOnInit(): void {
  }

}

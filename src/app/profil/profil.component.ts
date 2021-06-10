import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/users';
import { User } from '../modeles/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  use = new User()
  user = USERS;

  constructor() { }

  ngOnInit(): void {
  }

}

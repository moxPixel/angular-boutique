export class User {
  id: number ;
  firstname: string ;
  lastname: string ;
  picture: string ;
  created: Date;


  constructor(
    id: number = 0,
    firstname: string = '' ,
    lastname: string = '' ,
    picture: string = '',
    created: Date = new Date){

      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.picture = picture;
      this.created =  created;

    }
  }

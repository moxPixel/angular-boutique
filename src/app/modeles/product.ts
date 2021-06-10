export class Product {
  id: number ;
  price: number;
  name: string ;
  picture: string ;
  categories: string ;
  created: Date;


  constructor(
    id: number = 0,
    price: number = 0 ,
    name: string = '',
    picture: string = '',
    categories: string = '',
    created: Date = new Date){

      this.id = id;

      this.price = price;
      this.name = name;
      this.picture = picture;
      this.categories = categories;
      this.created =  created;

    }
}

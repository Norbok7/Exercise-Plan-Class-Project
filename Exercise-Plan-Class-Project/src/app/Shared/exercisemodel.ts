
export class Exercise {
  public bodypart: string
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(bodypart: string, id: number, name: string, description: string, imagePath: string){
    this.bodypart = bodypart;
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}



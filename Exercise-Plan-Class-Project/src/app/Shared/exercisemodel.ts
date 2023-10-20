export enum BodyPart {
  core = 'core',
  upper = 'upper',
  lower = 'lower',
}
export class Exercise {
  public bodypart?: BodyPart
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(bodypart: BodyPart, id: number, name: string, description: string, imagePath: string){
    this.bodypart = bodypart;
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}



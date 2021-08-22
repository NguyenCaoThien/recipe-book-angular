export class Recipe {
    public name: string;
    public description: string;
    public imgPath: string;

    public constructor(name: string, des: string, imgPath: string){
        this.name = name;
        this.description = des;
        this.imgPath = imgPath;
    }
}
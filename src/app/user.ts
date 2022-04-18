export class User {
    constructor(public name:string,public login:any,public gravatar_id:any,public avatar_url:any,public userName:string,public blog:string,public location:string,public followers:number,public following:number,public bio:string, public id:number){
        this.name =name
        this.userName = userName
        this.id =id
        
    }
}

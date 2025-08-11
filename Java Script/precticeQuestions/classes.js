let DATA = "secret information"

class User{
    constructor(name , email){
        this.name = name;
        this.email = email
    }

    viewData (){
        console.log("data =", DATA)
    }
}

class Admin extends User{
    constructor(name , email){
        super(name ,email);

    }

    editData(){
        DATA = "new secret information"
    }
}

let student = new User("kajal", "kajal1@gmail.com");
let student2 = new User("adik", "adik10@gmail.com");

let admin = new Admin("admin" , "admin123@email.com");
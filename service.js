class Service{

    constructor(arg1, arg2){
        // console.log(`Inside constructor of Service Class`);
        // console.log(`Currently this reference in Service class: `);
        // console.log(this);
        this.arg1 = arg1;
        this.arg2 = arg2;
    }

    addService(){
        return this.arg1 + this.arg2;
    }
}

module.exports = Service;
class Parent{

    get service(){
        return require('./service');
    }
}

class Child extends Parent{

    getSum(arg1, arg2){
        /**
         * Will cause an error
         * as at runtime new (super.service)(arg1, arg2) gets converted to => new super.service(arg1, arg2)
         * Which causes error " Unsupported reference to 'super' "
         */
        // const service = new (super.service)(arg1,arg2);
        const service = new (super.service.bind(this))(arg1, arg2);    //Will run sucessfully 
        return service.addService();
    }
}

module.exports = Child;


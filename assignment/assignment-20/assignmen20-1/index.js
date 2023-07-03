
 const outerFunction =()=>{
    var outer ='this is function';
    var fun ='this is vikash';
    const innerFunction = () => {
        console.log(outer);
    }

    const innerFunctio =() =>{
        console.log(fun)

    }

    return {
        innerFunctio,
        innerFunction
    }
 }

 var closure= outerFunction()


 closure.innerFunction();
 closure.innerFunctio();
// Exercise 1

function makeFunc() {
    const name = "vikash";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();


// Exercise 2
function createCount (i){
    let c=i;
    function inc(){
        c++;
      console.log(c);
    }
    function dec(){
        c--;
      console.log(c);
    }
    function mec(){
        var w= 'pandey';
      console.log(w);
    }

    return {
        inc,
        dec,
        mec
        
    };
}

const sol = createCount(1);
sol.inc();
sol.dec();
sol.mec();



var arr = ["a", "b"];

arr.push(function lala() {
    console.log( this );
});

arr[2]();

//[ 'a', 'b', [Function: lala] ]
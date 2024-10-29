// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:


//TODO: no need to create a separate array to store the spliced array 


const arr = ["ctc", "bbsr", "kjr","me"];

arr.splice(2 , 0,"london", "delhi")


console.log(arr)
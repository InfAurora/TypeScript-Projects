// Note: We can initialize an array by putting the list of elements in square brackets. 
// Also note that JavaScript is loosely typed - which means it allows us to mix types in our arrays...
// And that can cause all sorts of confusion. 
// Mixing element types like this is a *bad* practice. 
// We are doing this to show you how JavaScript can do these and how JavaScript can treat strings like numbers
var testArray = [0, 1, 1, "1", 3, "311"];

// For each of the elements in our array 
// Since we are comparing ahead (to the next element), we need to stop with the last 2 elements
// The (testArray.length - 1) will get us to the last 2 elements in the array.
for (var arrayPosition = 0; 
  arrayPosition < testArray.length - 1; arrayPosition++) 
  {
    // We're going to store the elements we are comparing in variables to make the code more readable 
    var currentElement = testArray[arrayPosition];
    var nextElement = testArray[arrayPosition + 1];
	
       
    // Is currentElement greater than nextElement?    
    console.log("Testing " + currentElement + " and " + nextElement + "(greater than): " + (currentElement > nextElement));

    // Is currentElement less than or equal to nextElement?
    console.log("Testing " + currentElement + " and " + nextElement + "(less than or equal to): " + (currentElement <= nextElement));

    // Are they equal to (==) each other?
    if (currentElement == nextElement) 
	{
        // If they are equal to (==) each other, are they strictly equal(===) to each other?
        console.log("Testing " + currentElement + " and " + nextElement + "(strictly equal to): " + (currentElement === nextElement));
        
		// If they are not strictly equal (===), what are their types?
        if (currentElement !== nextElement) 
		{
            // We can use the typeof() function of JavaScript to identify the type of an element
            console.log(currentElement + " is " + typeof(currentElement)); 
            console.log(nextElement  + " is " +  typeof(nextElement));
        }
    } else 
	{
        console.log("Testing " + currentElement + " and " + nextElement + "(equal to): false");

    }
}
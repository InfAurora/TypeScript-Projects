function addNums() {
	var start = parseFloat(document.getElementById("start").value);
	var end = parseFloat(document.getElementById("end").value);
	var step = parseFloat(document.getElementById("step").value);
	lst = [start];
	sum = start;
	evens = [];
	for (var i = 0;
		lst[i] <= end;
		i = i + 1){
		sum += step
		lst.push(sum);
		if (lst[i] % 2 === 0){
			console.log(lst[i])
			evens.push(lst[i])}
		}
	return evens;
}

/*form functions for errors*/
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["nums"].elements.length; 
        loopCounter++) {
        if (document.forms["nums"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["nums"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 
function validateItems() {
    clearErrors();
    var start = document.forms["nums"]["start"].value;
    var end = document.forms["nums"]["end"].value;
	var step = document.forms["nums"]["step"].value;
	
    if (start == "" || isNaN(start)) {
        alert("Start must be filled in with a number.");
        document.forms["nums"]["start"]
           .parentElement.className = "form-group has-error";
        document.forms["nums"]["start"].focus();
        return false;
    }
	
	if (end == "" || isNaN(end) || end <= start) {
        alert("Last must be filled in with a number and smaller then the starting number.");
        document.forms["nums"]["end"]
           .parentElement.className = "form-group has-error";
        document.forms["nums"]["end"].focus();
        return false;
    }
	
	if (step == "" || isNaN(step) || step < 1) {
        alert("Step must be filled in with a positive.");
        document.forms["nums"]["step"]
           .parentElement.className = "form-group has-error";
        document.forms["nums"]["step"].focus();
        return false;
    }
	
	document.getElementById("numbers").style.display = "block";
	document.getElementById("one").innerHTML = start;
	document.getElementById("two").innerHTML = end;
	document.getElementById("three").innerHTML = step;
	return false;
}

function arr() {
	var y = addNums(evens);
	var x = y.toString()
	var i=0
	document.getElementById("number").innerHTML	= x;
	document.getElementById("numbers2").style.display = "block";
	return false;
}
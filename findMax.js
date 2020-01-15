var list = [1, 2, 3, 4, 5, 25, 12, 11, 10, 9, 27];
var big = [0]
function findMax(numbers){
	for (var i = 0;
	i < numbers.length;
	i++){
	if (numbers[i] > big[0]){
	big.pop();
	big.push(numbers[i])}
}
	return big
}
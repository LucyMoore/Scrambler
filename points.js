// var score = 0

function points(num){
	if(num ===0){
		return 0
	}else{
		score +=num 
		console.log(score)
		return score
	}
}

module.exports = {
  points: points
}
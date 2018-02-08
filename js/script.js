// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {

	$("button").click(function() {
		var latinWord = $("input").val();
		var array = sentenceToPigLatin(latinWord);



	});

});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
function consonantWordToPigLatin(word) {
	var firstLetter = word.slice(1, 2);
	var restOfWord = word.slice(2, word.length);
	return word + res + "ay";
}
function vowelWordToPigLatin(word) {
	return word + "yay";
}
function isVowel(word) {
	var firstLetter = word.slice(1, 2);
	return ['a', 'e', 'i', 'o', 'u'].includes(firstLetter)

}
function wordToPigLatin(word) {
	
}



// Create the sentenceToPigLatin function that takes a sentence as a parameter
//Loops through all the words in the sentence and transforms each word
//It should return a transfromed sentance

function sentenceToPigLatin(sentence) {
	var words = sentence.split(" ");
	for (var i = 0; i < sentence.length; i++) {
		words[i] = wordsToPigLatin(words[i]);
	}
	return words.join(' ');
}

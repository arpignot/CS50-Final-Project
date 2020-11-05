//Textbox autofocus

window.onload = function() {
  document.getElementById('textBox').focus();
};

//Removes formatting by copy and past text

document.querySelector('div[contenteditable]').addEventListener('paste', function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData('text/plain');
    document.execCommand('insertHTML', false, text);
});

//Character counter

var text = document.getElementById('textBox');
var char = document.querySelector('.char');

function charCount() {
	var charc = text.textContent.trim().replace(/\s+/g, ' ').split('');
	char.textContent = !charc[0] ? 0 : charc.length;
}

text.addEventListener('input', charCount);
charCount();

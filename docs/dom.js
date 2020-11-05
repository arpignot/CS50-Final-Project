var textbox = document.getElementById('textBox');
var toolbar = document.getElementById('toolbar');
var body = document.querySelector('body');
var sidebar = document.querySelector('.sidebar');
var title = document.querySelector('.solump');

document.querySelector('#light').onclick = function() {
	body.style.backgroundColor = '#F7F6F5';
	textbox.style.backgroundColor = '#F7F6F5';
	textbox.style.color = 'black';
	toolbar.style.backgroundColor = '#98A1A9';
	toolbar.style.backgroundImage = 'linear-gradient(20deg, #98A1A9 30%, #656e76)';
	toolbar.style.transitionDuration = '0.5s';
	sidebar.style.backgroundColor = '#262626';
	title.style.backgroundImage = 'linear-gradient(white, #64717e)';
}

document.querySelector('#sunset').onclick = function() {
	body.style.backgroundColor = '#eadbcb';
 	textbox.style.backgroundColor = '#eadbcb';
 	textbox.style.color = '#563f46';
 	toolbar.style.backgroundColor = '#a68c96';
	toolbar.style.backgroundImage = 'linear-gradient(20deg, #a68c96 30%, #735963)';
	toolbar.style.transitionDuration = '0.5s';
 	sidebar.style.backgroundColor = '#90707d';
 	title.style.backgroundImage = 'linear-gradient(white, #90707d)';
}

document.querySelector('#coffee').onclick = function() {
	body.style.backgroundColor = '#dcd2c8';
	textbox.style.backgroundColor = '#dcd2c8';
	textbox.style.color = '#464747';
	toolbar.style.backgroundColor = '#938985';
	toolbar.style.backgroundImage = 'linear-gradient(20deg, #918a88 30%, #5E5755)';
	toolbar.style.transitionDuration = '0.5s';
	sidebar.style.backgroundColor = '#6d6461';
	title.style.backgroundImage = 'linear-gradient(white, #6c6260)';
}

document.querySelector('#dark').onclick = function() {
	body.style.backgroundColor = '#1c1c1c';
	textbox.style.backgroundColor = '#1c1c1c';
	textbox.style.color = '#b2b1b1';
	toolbar.style.backgroundColor = '#1a1a1a';
	toolbar.style.backgroundImage = 'linear-gradient(20deg, #1a1a1a 30%, #010101)';
	toolbar.style.transitionDuration = '0.5s';
	sidebar.style.backgroundColor = '#262626';
	title.style.backgroundImage = 'linear-gradient(white, #262626)';
}

document.querySelector('#bold').addEventListener('click', function() {
	document.execCommand('bold');
});

document.querySelector('#italic').addEventListener('click', function() {
	document.execCommand('italic');
});

document.querySelector('#underline').addEventListener('click', function() {
	document.execCommand('underline');
});

document.querySelector('#strikethrough').addEventListener('click', function() {
	document.execCommand('strikeThrough');
});

document.querySelector('#subscript').addEventListener('click', function() {
	document.execCommand('subscript');
});

document.querySelector('#superscript').addEventListener('click', function() {
	document.execCommand('superscript');
});

document.querySelector('#paragraph').addEventListener('click', function() {
	document.execCommand('insertParagraph');
});

document.querySelector('#select-all').addEventListener('click', function() {
	document.execCommand('selectAll');
});

document.querySelector('#re-format').addEventListener('click', function() {
	document.execCommand('removeFormat');
});

document.querySelector('#inc-size').addEventListener('click', function() {
	document.execCommand('increaseFontSize');
});

document.querySelector('#dec-size').addEventListener('click', function() {
	document.execCommand('decreaseFontSize');
});

document.querySelector('#delete').addEventListener('click', function() {
	document.execCommand('delete');
});

document.querySelector('#left-align').addEventListener('click', function() {
	document.execCommand('justifyLeft');
});

document.querySelector('#center-align').addEventListener('click', function() {
	document.execCommand('justifyCenter');
});

document.querySelector('#right-align').addEventListener('click', function() {
	document.execCommand('justifyRight');
});

document.querySelector('#justify-align').addEventListener('click', function() {
	document.execCommand('justifyFull');
});

document.querySelector('#indent').addEventListener('click', function() {
	document.execCommand('indent');
});

document.querySelector('#outdent').addEventListener('click', function() {
	document.execCommand('outdent');
});

document.querySelector('#number-list').addEventListener('click', function() {
	document.execCommand('insertOrderedList');
});

document.querySelector('#bullet-list').addEventListener('click', function() {
	document.execCommand('insertUnorderedList');
});

document.querySelector('#undo').addEventListener('click', function() {
	document.execCommand('undo');
});

document.querySelector('#redo').addEventListener('click', function() {
	document.execCommand('redo');
});

///Fonts & textbox width (1920x1080 and max-width 600)

document.querySelector('#open-sans').onclick = function() {
	textbox.style.fontFamily = 'Open Sans,sans-serif';

	if (window.matchMedia('(max-width: 600px)').matches) {
		textbox.style.fontSize = '20px';
	}

	else {
		textbox.style.fontSize = '16px';
	}
}

document.querySelector('#pt-serif').onclick = function() {
	textbox.style.fontFamily = 'PT Serif,serif';

	if (window.matchMedia('(max-width: 600px)').matches) {
		textbox.style.fontSize = '21px';
	}

	else {
		textbox.style.fontSize = '18px';
	}
}

document.querySelector('#crimson-text').onclick = function() {
	document.querySelector('#textBox').style.fontFamily = 'Crimson Text,serif';

	if (window.matchMedia('(max-width: 600px)').matches) {
		textbox.style.fontFamily = '23px';
	}

	else {
		textbox.style.fontSize = '20px';
	}
}

document.querySelector('#letter-size').onclick = function() {
	if (window.matchMedia('(max-width: 600px)').matches) {
		textbox.style.width = '35%';
		textbox.style.top = '5%';
		textbox.style.left = '0';
	}

	else {
		textbox.style.width = '35%';
		textbox.style.left = '25%';
	}
}

document.querySelector('#tabloid-size').onclick = function() {
	if (window.matchMedia('(max-width: 600px)').matches) {
		textbox.style.width = '55%';
		textbox.style.top = '5%';
		textbox.style.left = '0';
	}

	else {
		textbox.style.width = '70%';
		textbox.style.left = '8%';
	}
}

document.querySelector('#standard-size').onclick = function() {
	if (window.matchMedia('(max-width: 600px)').matches) {
		textbox.style.width = '80%';
		textbox.style.top = '5%';
		textbox.style.left = '0';
	}

	else {
		textbox.style.width = '90%';
		textbox.style.left = '0';
	}
}

document.querySelector('.fa-file-text').onclick = function() {
	textbox.innerHTML = '';
}

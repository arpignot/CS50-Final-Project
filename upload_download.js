///Upload text file to contenteditable

function addText(evt) {
  var f = evt.target.files[0];
    console.log(f);
      alert("Your previous file will be deleted if you upload a new one");
  
      if (!f) {
      alert("Failed to load file");
        return;
    } 
      if (f.name.indexOf('.txt') == -1) {
      alert(f.name + " is not a valid text file.");
        return;
    }
      
  var r = new FileReader();
    r.onload = function(e) { 
    var contents = e.target.result;
      contents = contents.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
      .replace(/<div>/g, '').replace(/<\/div>/g, ' ').replace(/<br\s*[\/]?>/g, ' ');
      document.getElementById('textBox').innerText = contents;
      }
      r.readAsText(f, 'ISO-8859-1', 'ISO-8859-2', 'ISO-8859-3', 'ISO-8859-4', 'ISO-8859-5',
        'ISO-8859-6', 'ISO-8859-7', 'ISO-8859-8', 'ISO-8859-10', 'ISO-8859-11', 'ISO-8859-13', 'ISO-8859-14', 'ISO-8859-15', 'ISO-8859-16');
}

document.getElementById('file-selector').addEventListener('change', addText, false);

///Download text as file

function save() {
  var text = document.getElementById('textBox').innerHTML;
  
  box = text.replace(/<\/div>/g, '\r\n').replace(/<br\s*[\/]?>/g, '\r\n').replace(/<div>/g, '')
        .replace(/<b>/g, '').replace(/<\/b>/g, '').replace(/<u>/g, '').replace(/<\/u>/g, '').replace(/<i>/g, '').replace(/<\/i>/g, '')
        .replace(/<sub>/g, '').replace(/<\/sub>/g, '').replace(/<sup>/g, '').replace(/<\/sup>/g, '')
        .replace(/<div align="left">/g, '').replace(/<div align="right">/g, '').replace(/<div align="center">/g, '').replace(/<div align="justify">/g, '')
        .replace(/<big>/g, '').replace(/<\/big/g, '').replace(/<small>/g, '').replace(/<\/small>/g, '');
  document.getElementById('download').setAttribute('href', 'data:Content-type: text/plain, ' + encodeURI(box));
}

function saveraw() {
  var text = document.getElementById('textBox').innerHTML;

  document.getElementById('downloadraw').setAttribute('href', 'data:Content-type: text/plain, ' + encodeURI(text));
}

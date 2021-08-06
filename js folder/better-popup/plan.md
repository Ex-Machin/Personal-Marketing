with scroll + event.target +  "use strict";

0. create another modal
1. why javascript is before end of the body
2. DOMContentLoaded(DOMContentLoaded – браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены. load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.).
beforeunload/unload – пользователь покидает страницу.)
2.0.1 we can do also 

window.onbeforeunload = function() {
  return "Есть несохранённые изменения. Всё равно уходим?";
};

- here we can see the difference between window and document 

2.1 explain what is document (document.querySelector) // from image
2.2 BOM - alert/prompt/confirm
2.3 javascript is javascript
3. event listener try to explain with <a> and <button> - tags
4. event.preventDefault();
5. explain what is event
5.1 console.log(event)
6. make a close-button
7. fix scroll

'use strict'


Just in case

external-links

https://www.youtube.com/watch?v=G5Or47gPH-4
https://javascript.info/onload-ondomcontentloaded#window-onunload
https://javascript.info/bubbling-and-capturing

homework

- do the same with previouses popups
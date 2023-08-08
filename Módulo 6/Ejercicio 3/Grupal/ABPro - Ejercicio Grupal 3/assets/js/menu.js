document.addEventListener('DOMContentLoaded', function () {
  var menuPlaceholder = document.getElementById('menu-placeholder');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'menu.html', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      menuPlaceholder.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
});

  
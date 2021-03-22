const accordeons = document.getElementsByTagName('details')

function closeOtherElements(currentId) {
  for (element of accordeons) {
    if (element.id !== currentId) {
      element.removeAttribute("open");
    }
  }
}

for (acc of accordeons) {
  acc.addEventListener('click', function (e) {
    closeOtherElements(e.target.parentElement.id)
  })
}
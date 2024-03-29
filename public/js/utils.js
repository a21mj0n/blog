const createError = () => {
  const errorContainer = document.querySelector('.errors')

  if (errors.length > 0) {
    errors.forEach(error => {
      const div = document.createElement('div')
      div.classList.add('alert', 'alert-danger')
      div.innerText = error
      errorContainer.appendChild(div)
    })
  }
}

const makeRoute = (route) => {
  window.location.href = route
}
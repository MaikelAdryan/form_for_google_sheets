const handleSubmit = (events) => {
  events.preventDefault()
  
  const name = document.querySelector("input[name=name]").value
  const email = document.querySelector("input[name=email]").value

  fetch("https://api.sheetmonkey.io/form/kHncNXsfYivg844Bipay4d",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email })
  })
}
document.querySelector("form").addEventListener("submit", handleSubmit)
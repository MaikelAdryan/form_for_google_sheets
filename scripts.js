const handleSubmit = (events) => {
  events.preventDefault()
  
  const name = document.querySelector("input[name=name]").value
  const email = document.querySelector("input[name=email]").value

  const DATA = {
    name, email
  }

  fetch("https://api.sheetmonkey.io/form/kHncNXsfYivg844Bipay4d",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(DATA)
  }).then(()=>{ alert("dados salvos") })
}
document.querySelector("form").addEventListener("submit", handleSubmit)
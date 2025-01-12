let userForm = document.querySelector("[type=app-form]");

userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form btn data click");
  let formData = new FormData(userForm);
  let data = [...formData.values()];
  fetch(`${location.origin}/apps/proxy-5/userinfo?shop=${Shopify.shop}`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
});

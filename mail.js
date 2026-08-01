const form = document.getElementById("contact-form");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://homepage-iitb-mailer.vercel.app/mail",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          firstName: firstName.value.trim(),

          lastName: lastName.value.trim(),

          email: email.value.trim(),

          message: message.value.trim(),
        }),
      },
    );

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");

      form.reset();
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(message);
    console.error(err);
    alert(err.message);

    alert("Couldn't connect to the server.");
  }
});

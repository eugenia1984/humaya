(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        if (form.checkValidity()) {
          fetch("https://formsubmit.co/ajax/costamariaeugenia1@gmail.com", {
            method: "POST",
            body: new FormData(event.target),
          })
            .then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then((json) => {
              form.reset();
            })
            .catch((err) => {
              console.log(err);
            });
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

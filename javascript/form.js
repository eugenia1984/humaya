(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();

          // TODO: solo debe enviarse cuando este validado
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
            })
            .finally(() => {
              console.log("Enviado");
            });

          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();


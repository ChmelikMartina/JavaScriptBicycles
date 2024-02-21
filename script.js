const btnCenaCelk = document.querySelector("#cena-celkem");
btnCenaCelk.addEventListener("click", () => {
  // reset ceny
  let cenaCalc = 0;

  const vybranaKola = document.querySelectorAll('input[name="chb-group-kola"]');
  const kolaKs = document.querySelectorAll('input[name="chb-group-ks"]');

  // smycka na vypocet zaskrtnutych kol podle jejich ceny a poctu ks
  for (let i = 0; i < vybranaKola.length; i++) {
    if (vybranaKola[i].checked === true) {
      cenaCalc += parseInt(vybranaKola[i].value) * parseInt(kolaKs[i].value);
    }
  }
  // vynasobeni ceny poctem zapujcnich dnu
  cenaCalc = cenaCalc * document.querySelector("#doba").value;
  //   jaky rb je zaskrtnuty
  cenaCalc =
    cenaCalc * document.querySelector('input[name="nosic"]:checked').value;
  //   vypis celk ceny
  document.querySelector("#cena-celkem-vypis").textContent =
    cenaCalc.toFixed(2);

  // penezni limit
  const maxUtrata = document.querySelector("#max-utrata").value;
  const txt = document.querySelector("#max-utrata-zprava");
  console.log(cenaCalc);
  console.log(maxUtrata);
  if (cenaCalc > maxUtrata) {
    txt.textContent = `Je nutne jeste priplatit ${(
      cenaCalc - maxUtrata
    ).toFixed(2)} Kc.`;
  } else {
    txt.textContent = `Neni treba nic doplacet.`;
  }
});

// Overeni emailu.
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", () => {
  const email = document.querySelector('input[name="email"]').value;
  console.log(email);
  if (!email.includes("@")) {
    alert("Neplatny email");
  }
});

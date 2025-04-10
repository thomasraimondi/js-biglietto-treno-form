// * Get Form element
const formTicketTrainEl = document.getElementById("form-ticket-train");
const fullNameInput = document.getElementById("fullname");
const kmInput = document.getElementById("km");
const ageRangeInput = document.getElementById("age-range");
const btnConfirm = document.getElementById("btn-confirm");
const btnDelete = document.getElementById("btn-delete");

// * GetOutputelement
const outputInfo = document.getElementById("output-info");
const userOutput = document.getElementById("fullname-output");
const discountOutput = document.getElementById("discount");
const postoOutput = document.getElementById("posto");
const numberReservepostoOutput = document.getElementById("number-reserved");
const ticketPriceOutput = document.getElementById("ticket-price");

formTicketTrainEl.addEventListener("submit", (event) => {
  event.preventDefault();

  // * Salvo i dati inseriti
  const fullName = fullNameInput.value;
  const km = kmInput.value;
  const ageRange = ageRangeInput.value;
  const priceKm = 0.21;
  let tariffa = "";
  let finalPrice;

  // * Verifico i dati inseriti
  console.log(`Full Name: ${fullName}`);
  console.log(`Km: ${km}`);
  console.log(`Age Range: ${ageRange}`);

  // * Verifico che gli input vengano valorizzati
  if (!fullName) {
    console.log("Dati non corretti");
    return;
  }

  if (!km) {
    console.log("Dati non corretti");
    return;
  }
  if (ageRange === "-") {
    console.log("Dati non corretti");
    return;
  }

  const place =
    generateRandomString(1) + Math.floor(Math.random() * (1000 - 1)) + 1;
  console.log("dati corretti");

  const numberReserve = "#" + Math.floor(Math.random() * (10000000 - 1)) + 1;

  // * calcolo costo biglietto

  if (ageRange === "minorenne") {
    const defaultPrice = km * priceKm;
    console.log(`Costo biglietto default: € ${defaultPrice.toFixed(2)}`);
    const discuontPercent = 20;
    const discount = (defaultPrice / 100) * discuontPercent;
    console.log(`Costo biglietto default: € ${discount.toFixed(2)}`);

    finalPrice = defaultPrice - discount;
    console.log(`Costo biglietto default: € ${finalPrice.toFixed(2)}`);

    tariffa = "Sconto Minorenni";
  } else if (ageRange === "over65") {
    const defaultPrice = km * priceKm;
    console.log(`Costo biglietto default: € ${defaultPrice.toFixed(2)}`);
    const discuontPercent = 40;
    const discount = (defaultPrice / 100) * discuontPercent;
    console.log(`Costo biglietto default: € ${discount.toFixed(2)}`);

    finalPrice = defaultPrice - discount;
    console.log(`Costo biglietto default: € ${finalPrice.toFixed(2)}`);
    tariffa = "Sconto Over 65";
  } else {
    finalPrice = km * priceKm;
    console.log(`Costo biglietto default: € ${finalPrice.toFixed(2)}`);
    tariffa = "Tariffa Scandard";
  }

  userOutput.innerText = fullName;
  discountOutput.innerText = tariffa;
  postoOutput.innerText = place;
  numberReservepostoOutput.innerText = numberReserve;
  ticketPriceOutput.innerText = `€ ${finalPrice.toFixed(2)}`;

  outputInfo.classList.remove("d-none");
});

// Function to generate a random 5-character string
function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

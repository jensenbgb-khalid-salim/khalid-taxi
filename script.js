document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const pickup = document.getElementById("pickup").value;
    const destination = document.getElementById("destination").value;
    const time = document.getElementById("time").value;

    document.getElementById("confirmation").innerText =
        `Tack ${name}! Din bokning är mottagen. Upphämtning: ${pickup} → ${destination} kl ${time}.`;

    this.reset();
});

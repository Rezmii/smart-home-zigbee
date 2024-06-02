const sendColorToServer = async (color, device) => {
  console.log(color),
  console.log(device)
  // try {
  //   const response = await fetch("URL_DO_SERWERA", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ color }),
  //   });

  //   const data = await response.json();
  //   console.log("Odpowiedź serwera:", data);
  // } catch (error) {
  //   console.error("Błąd podczas wysyłania koloru do serwera:", error);
  // }
};

export default sendColorToServer;

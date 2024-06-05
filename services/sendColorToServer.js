import { url } from "./getDeviceList";

const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const sendColorToServer = async (color, device) => {
  var colorRGB = hexToRgb(color);
  console.log(colorRGB);
  console.log(
    "/device/" +
      device.friendly_name +
      "/color/" +
      colorRGB.r +
      "/" +
      colorRGB.g +
      "/" +
      colorRGB.b
  );
  try {
    const response = await fetch(
      url +
        "/device/" +
        device.friendly_name +
        "/color/" +
        colorRGB.r +
        "/" +
        colorRGB.g +
        "/" +
        colorRGB.b,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("Odpowiedź serwera:", data);
  } catch (error) {
    console.error("Błąd podczas wysyłania koloru do serwera:", error);
  }
};

export default sendColorToServer;

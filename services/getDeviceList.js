export const url = "http://192.168.11.6:3020";

const getDeviceList = async () => {
  try {
    const response = await fetch(url + "/devices/all", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return JSON.stringify(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default getDeviceList;

const getDeviceList = async () => {
  try {
    const response = await fetch("http://localhost:3020/devices/all", {
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

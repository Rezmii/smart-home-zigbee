const getDeviceList = async () => {
  try {
    const response = await fetch("http://192.168.121.6:3020/devices/all", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default getDeviceList;

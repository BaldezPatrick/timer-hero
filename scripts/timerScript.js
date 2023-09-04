const getSeconds = (seconds) => {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-Br", { hour12: false, timeZone: "UTC" });
};


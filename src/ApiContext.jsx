import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [hubData, setHubData] = useState(null);
    const [hubpackData, setHubPackData] = useState(null);

      const [hubtrainerData, setHubtrainerData] = useState(null);
    const [hubadvertData, setHubAdvertData] = useState(null);
      const [hubachievedata, setHubachieveData] = useState(null);

  const gymidis =   localStorage.getItem("gymid") || 0;
  useEffect(() => {
    if (!hubtrainerData) {
      axios
        .get("https://oxadmedia.online/api/get-ad-data", {
          params: { gymid: gymidis },
        })
        .then((res) => {
          if (res.data.success) {
            setHubAdvertData(res.data.result);
           // localStorage.setItem("hubData", JSON.stringify(res.data.result));
          }
        })
        .catch((err) => console.error("API error:", err));
    }
  }, [hubtrainerData]);
  useEffect(() => {
    if (!hubData) {
      axios
        .get("https://oxadmedia.online/api/get-hub-data", {
          params: { gymid: gymidis, type: 0 },
        })
        .then((res) => {
          if (res.data.success) {
            setHubData(res.data.result);
           // localStorage.setItem("hubData", JSON.stringify(res.data.result));
          }
        })
        .catch((err) => console.error("API error:", err));
    }
  }, [hubData]);

   useEffect(() => {
    if (!hubpackData) {
      axios
        .get("https://oxadmedia.online/api/get-hub-data", {
          params: { gymid: gymidis, type: 1 },
        })
        .then((res) => {
          if (res.data.success) {
            setHubPackData(res.data.result);
           // localStorage.setItem("hubData", JSON.stringify(res.data.result));
          }
        })
        .catch((err) => console.error("API error:", err));
    }
  }, [hubpackData]);

   useEffect(() => {
    if (!hubtrainerData) {
      axios
        .get("https://oxadmedia.online/api/get-hub-data", {
          params: { gymid: gymidis, type: 2 },
        })
        .then((res) => {
          if (res.data.success) {
            setHubtrainerData(res.data.result);
           // localStorage.setItem("hubData", JSON.stringify(res.data.result));
          }
        })
        .catch((err) => console.error("API error:", err));
    }
  }, [hubtrainerData]);
 useEffect(() => {
    if (!hubachievedata) {
      axios
        .get("https://oxadmedia.online/api/get-hub-data", {
          params: { gymid: gymidis, type: 3 },
        })
        .then((res) => {
          if (res.data.success) {
            setHubachieveData(res.data.result);
           // localStorage.setItem("hubData", JSON.stringify(res.data.result));
          }
        })
        .catch((err) => console.error("API error:", err));
    }
  }, [hubachievedata]);
  return (
    <ApiContext.Provider value={{ hubData,hubpackData,hubtrainerData,hubadvertData,hubachievedata }}>
      {children}
    </ApiContext.Provider>
  );
}

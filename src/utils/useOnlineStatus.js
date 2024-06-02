import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  console.log("calling custom hook useoffline or online");
  useEffect(() => {
    console.log("check the device offline/online mode useEffect");
    window.addEventListener("offline", () => {
      console.log("check the device offline/online mode");
      setOnlineStatus(false);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;

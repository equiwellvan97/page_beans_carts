import { useEffect, useState } from "react";

export enum DeviceType {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
}

const useDeviceType = () => {
  const [isDeviceType, setIsDeviceType] = useState(getDeviceType);

  useEffect(() => {
    const updateWindowSize = () => {
      setIsDeviceType(getDeviceType());
    };

    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return isDeviceType;
};

export default useDeviceType;

const getDeviceType = () => {
  const width = window.innerWidth;

  if (width < 768) {
    return DeviceType.MOBILE;
  } else if (width > 768 && width < 1000) {
    return DeviceType.TABLET;
  } else {
    return DeviceType.DESKTOP;
  }
};

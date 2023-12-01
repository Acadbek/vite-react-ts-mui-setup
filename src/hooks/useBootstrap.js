import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage } from "@/libs";
import { setAuth, setToken, authSelector } from "@/store";

export default function useBootstrap() {
  const dispatch = useDispatch();
  const [isInitiated, setIsInitiated] = useState(true);
  const { isAuth } = useSelector(authSelector);

  const accessToken = getLocalStorage("access-token");

  const setApp = () => {
    if (accessToken) {
      dispatch(setAuth(true));
      dispatch(setToken(accessToken));
    }
  };

  const getAppConfigs = () => {
    try {
      setApp();

      setIsInitiated(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAppConfigs();
  }, []);

  return { isAuth, isInitiated };
}

// import { notification } from "antd"; // if you want to use antd
import { AxiosError } from "axios";
import { makeErrMsg } from "./general";

export const addNotification = (data: AxiosError | string): void => {
  if (data instanceof AxiosError) {
    // notification.error({
    //   message: makeErrMsg(data),
    //   placement: "topRight",
    // });

    return;
  }

  // notification.success({
  //   message: data,
  //   placement: "topRight",
  // });
};

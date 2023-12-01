import { notification } from "antd";
import { AxiosError } from "axios";
import { makeErrMsg } from "./general";

export const addNotification = (data) => {
  if (data instanceof AxiosError) {
    notification.error({
      message: makeErrMsg(data),
      placement: "topRight",
    });

    return;
  }

  notification.success({
    message: data,
    placement: "topRight",
  });
};
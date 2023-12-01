import { stage } from "@/config";

export const cdnUrl = new URL(stage.cdnHost);
export const VALID_MIME_TYPES = [".pdf", ".pptx"];
export const passwordRegex = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9][a-zA-Z0-9!@#$%^&*.,_-]{6,17}$/)
export const loadings = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

export const makeErrMsg = (error) => {
  if (!error.response?.data) {
    return error.message;
  }

  if (error.response?.data) {
    return error.response.data.message;
  }

  const { err: responseError } = error.response.data;

  if (responseError.errMsg instanceof Array) {
    return responseError.errMsg[0];
  }

  return responseError.errMsg;
};

export const makeFileUrl = (partUrl) => {
  if (!partUrl) {
    return;
  }
  const pathname = [cdnUrl.pathname, partUrl].join("/");

  return new URL(pathname, stage.cdnHost).href;
};


import { stage } from "@/config";

export const cdnUrl: URL = new URL(stage.cdnHost);
export const VALID_MIME_TYPES: string[] = [".pdf", ".pptx"];
export const passwordRegex: RegExp = new RegExp(
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9][a-zA-Z0-9!@#$%^&*.,_-]{6,17}$/
);
export const loadings: { [key: string]: string } = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

export const makeErrMsg = (error: any): string => {
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

export const makeFileUrl = (partUrl: string): string | undefined => {
  if (!partUrl) {
    return;
  }
  const pathname: string = [cdnUrl.pathname, partUrl].join("/");

  return new URL(pathname, stage.cdnHost).href;
};

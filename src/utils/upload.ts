import { uploadApi } from "@/api";
import { addNotification } from "./addNotification";

export const upload = async (file: File): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    return await uploadApi.fileUpload(formData);
  } catch (error) {
    addNotification(error);
    return Promise.reject(error);
  }
};

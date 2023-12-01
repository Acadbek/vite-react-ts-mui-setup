import { useState } from "react";
import { Upload } from "antd";

export default function useUpload(messageApi) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => setPreviewOpen(false);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const checkFormat = (file) => {
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/bmp"
    ) {
      return true;
    }

    return false;
  };

  const checkSize = (file) => {
    return file.size / 1024 / 1024 < 2;
  };

  const beforeUpload = (file) => {
    if (!checkFormat(file)) {
      messageApi.error("You can only upload JPG/PNG/BMP file");

      return Upload.LIST_IGNORE;
    }

    if (!checkSize(file)) {
      messageApi.error("Image maximum size of 2MB");

      return Upload.LIST_IGNORE;
    }

    return false;
  };

  return {
    previewOpen,
    previewImage,
    previewTitle,
    beforeUpload,
    handleCancel,
    handlePreview,
  };
}

// if (!isJpgOrPng) {
//   notification.error({
//     message: "You can only upload JPG/PNG/BMP file!",
//     placement: "topRight"
//   });
// }

// const isLt2M = file.size / 1024 / 1024 < 2;

// if (!isLt2M) {
//   notification.error({
//     message: "Image maximum size of 2MB",
//     placement: "topRight"
//   });
// }

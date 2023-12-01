import { createContext, useState } from "react";

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [bar, setBar] = useState(false);

  const handleShow = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const barShow = () => {
    setBar(true);
  }
  const barClose = () => {
    setBar(false);
  }

  return (
    <ModalContext.Provider
      value={{
        show: handleShow,
        close: handleCancel,
        barShow: barShow,
        barClose: barClose,
        visible,
        setVisible,
        bar,
        setBar,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

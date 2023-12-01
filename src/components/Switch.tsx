import { useEffect, useState } from "react";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type Theme = "dark" | "light";

export const Switch = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleChange = (e: ChangeEvent) =>
    setTheme(e.target.checked ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="container-switch">
      <span>Change Theme </span>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};


export default Switch;
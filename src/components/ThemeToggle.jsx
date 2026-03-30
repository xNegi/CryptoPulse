import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke , faCircleHalfStroke} from "@fortawesome/free-solid-svg-icons";



export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button className="flex items-center gap-1 w-full"
      onClick={() => {setDark(!dark)}}
      >
      {dark ? (
        <FontAwesomeIcon icon={faCircleHalfStroke} className="text-lg" />
      ) : (
        <FontAwesomeIcon icon={faStarHalfStroke} className="text-lg" />  
      )}
    Theme </button>
  );
}


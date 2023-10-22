import { Link } from "react-router-dom";
import icon from "../styles/images/icon.png";
import "../styles/About.css";

export default function About() {
  return (
    <div className="bg-transparent h-screen flex flex-col items-center justify-center">
      <div className="text-white p-0 rounded-lg shadow-md text-center">
        <div className="flex items-center justify-center mb-4">
          <img
            src={icon}
            alt="Logo"
            className="max-w-full h-auto max-h-[200px] absolute bg-transparent"
          />
        </div>
        {true && <br />}
        <h2 className="text-2xl font-bold mt-12 py-2 pt-8">
          Wanna learn more about us?
        </h2>
        <p className="text-gray-200 mt-2 text-lg">
          Click{" "}
          <Link
            to="https://dragonbyte.godaddysites.com/"
            target="_blank"
            className="text-blue-500"
          >
            here
          </Link>
          !
        </p>
      </div>
    </div>
  );
}

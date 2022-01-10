import React from "react";
// Components
import Nav from "components/molecules/Nav";
// Config
import { ROUTES } from "app.config";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center border-solid border-t border-hover">
      <div className="w-full max-w-[1600px] h-32 flex flex-col justify-between items-center p-4 sm:h-24 sm:flex-row-reverse md:px-8">
        <Nav routes={ROUTES} />
        <span className="block">
          <strong>&copy; 2022</strong> Alejandro Serrano
        </span>
      </div>
    </footer>
  );
}

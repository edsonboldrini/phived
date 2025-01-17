import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CaretUp } from "src/icons";
import { isDailyPage } from "src/utils";

export function ModeSelectorMobile() {
  const [showModes, setShowModes] = useState(false);

  const toggleShowModes = () => {
    setShowModes((showModes) => !showModes);
  };

  return (
    <div className="absolute top-6 sm:hidden">
      <div className="flex flex-col">
        <button
          onClick={toggleShowModes}
          className="flex items-center gap-3 text-sm xs:text-lg"
        >
          <p className="text-trueBlack dark:text-trueWhite">switch tasks</p>
          <span
            className={`h-fit w-fit ${showModes ? "rotate-0" : "rotate-180"}`}
          >
            <CaretUp className="fill-trueBlack dark:fill-trueWhite" />
          </span>
        </button>
      </div>
      {showModes && (
        <div className="absolute top-10 -left-10 flex h-fit w-48 flex-col divide-y divide-trueBlack overflow-hidden rounded-2xl border border-trueBlack bg-softWhite shadow-brutalist-dark dark:divide-trueWhite dark:border-trueWhite dark:bg-softBlack dark:text-trueWhite dark:shadow-brutalist-light">
          <Link
            to="/"
            onClick={toggleShowModes}
            className="flex items-center justify-between px-5 py-3 text-sm xs:text-lg"
          >
            <div className="flex items-center gap-2">
              general
              <span className="h-2 w-2 rounded-full bg-berryBlue dark:bg-purpleRain" />
            </div>
            {isDailyPage() && (
              <ArrowRight
                className="fill-trueBlack dark:fill-trueWhite"
                size={18}
              />
            )}
          </Link>
          <Link
            to="/daily"
            onClick={toggleShowModes}
            className="relative flex items-center justify-between px-5 py-3 text-sm xs:text-lg"
          >
            <div className="flex items-center gap-2">
              daily
              <span className="h-2 w-2 rounded-full bg-dailyGreen dark:bg-dailyPurple" />
            </div>
            {!isDailyPage() && (
              <ArrowRight
                className="fill-trueBlack dark:fill-trueWhite"
                size={18}
              />
            )}
          </Link>
        </div>
      )}
    </div>
  );
}

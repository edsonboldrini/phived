import { Close } from "src/icons";
import { isDailyPage } from "src/utils";

type HelpMenuProps = {
  closeHelpMenu?: () => void;
};

export function HelpMenu({ closeHelpMenu }: HelpMenuProps) {
  return (
    <main className="absolute right-7 top-full hidden max-w-xs flex-col rounded-2xl border border-trueBlack bg-trueWhite px-5 pt-4 pb-2 shadow-brutalist-dark dark:border-trueWhite dark:bg-softBlack dark:shadow-brutalist-light lg:flex">
      <button
        onClick={closeHelpMenu}
        className="absolute right-3 top-3 h-fit w-fit rounded-md p-1 hover:bg-unavailableLight dark:hover:bg-unavailableDark"
      >
        <Close className="fill-trueBlack dark:fill-trueWhite" />
      </button>
      <h1 className="text-trueBlack dark:text-trueWhite">
        welcome to the phived.com, the
        <br />
        <strong>anti-procrastination to-do list!</strong>
      </h1>
      <br />
      <h2 className="text-trueBlack dark:text-trueWhite">
        <strong>list five things you wish to get done.</strong> to add more
        tasks, complete existing ones!
      </h2>
      <br />
      <p className="text-trueBlack dark:text-trueWhite">
        <strong>want to know more?</strong> access{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/phivedphived/status/1636734098252128257?s=20"
          className="cursor-pointer underline decoration-softBlack underline-offset-2 dark:decoration-softWhite"
        >
          this post
        </a>{" "}
        or{" "}
        <a
          target="_blank"
          href="https://twitter.com/LukeberryPi"
          className="cursor-pointer underline decoration-softBlack underline-offset-2 dark:decoration-softWhite"
          rel="noreferrer"
        >
          send me a message
        </a>
        .
      </p>
      <br />
      <hr className="mb-7 h-px w-full border-trueBlack dark:border-trueWhite" />
      <div className="space-y-3">
        <p className="text-trueBlack dark:text-trueWhite">
          <kbd className="rounded border border-trueBlack px-2 py-1 font-sans dark:border-trueWhite">
            enter
          </kbd>{" "}
          navigates to the next task,{" "}
        </p>
        <br />
        <p className="leading-7 text-trueBlack dark:text-trueWhite">
          <kbd className="rounded border border-trueBlack px-2 py-1 font-sans dark:border-trueWhite">
            shift
          </kbd>{" "}
          +{" "}
          <kbd className="rounded border border-trueBlack px-2 py-1 font-sans dark:border-trueWhite">
            enter
          </kbd>{" "}
          navigates to the previous task,
        </p>
        <br />
        <p className="-translate-y-3 leading-7 text-trueBlack dark:text-trueWhite">
          <kbd className="rounded border border-trueBlack px-2 py-1 font-sans dark:border-trueWhite">
            ctrl
          </kbd>{" "}
          +{" "}
          <kbd className="rounded border border-trueBlack px-2 py-1 font-sans dark:border-trueWhite">
            enter
          </kbd>{" "}
          will complete the current task, or just click{" "}
          <span
            onClick={closeHelpMenu}
            className={`cursor-pointer rounded-r-md border border-trueBlack ${
              isDailyPage()
                ? "bg-dailyGreen dark:bg-dailyPurple"
                : "bg-berryBlue dark:bg-purpleRain"
            } py-1 px-2 dark:border-trueWhite`}
          >
            done?
          </span>
        </p>
      </div>
    </main>
  );
}

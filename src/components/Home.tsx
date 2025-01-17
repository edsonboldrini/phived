import { HelmetProvider } from "react-helmet-async";
import {
  Footer,
  Header,
  Message,
  GeneralTasks,
  Head,
  ModeSelectorMobile,
} from "src/components";
import { GeneralTasksContextProvider } from "src/contexts";

export function Home() {
  return (
    <GeneralTasksContextProvider>
      <div className="flex h-full w-full flex-col items-center justify-center bg-softWhite dark:bg-trueBlack">
        <HelmetProvider>
          <Head />
        </HelmetProvider>
        <ModeSelectorMobile />
        <Header />
        <GeneralTasks />
        <Message />
        <Footer />
      </div>
    </GeneralTasksContextProvider>
  );
}

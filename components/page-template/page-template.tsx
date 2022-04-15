
import { Header, Footer } from "@/components";
import { PageProps } from "./types";

export function PageTemplate({ ...props }: PageProps) {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto">
        <div className="w-full mx-auto">
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  );
}
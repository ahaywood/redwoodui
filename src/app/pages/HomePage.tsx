import { RequestInfo } from "rwsdk/worker";
import ExampleAccordion from "@/app/components/Accordion";

export function HomePage({ ctx }: RequestInfo) {
  return (
    <div>
      <ExampleAccordion />
    </div>
  );
}

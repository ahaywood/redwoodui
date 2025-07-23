import { RequestInfo } from "rwsdk/worker";
import TestStyles from "@/app/components/TestStyles";

export function HomePage({ ctx }: RequestInfo) {
  return (
    <div>
      <TestStyles />
    </div>
  );
}

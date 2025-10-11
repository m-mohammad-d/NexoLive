import { Toggle } from "./Toggle";
import { Wrapper } from "./Wrapper";

export async function Sidebar() {
  return (
    <Wrapper>
      <Toggle />

      <div className="space-y-4 pt-4 lg:pt-0"></div>
    </Wrapper>
  );
}

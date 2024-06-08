import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import BottomSheetComponent from "@/ui/bottom-sheet";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/BottomSheet",
  component: BottomSheetComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //   tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof BottomSheetComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomSheet = () => {
  const [open, setOpened] = useState(false);
  return (
    <div>
      <Button label="Open bottom sheet" onClick={() => setOpened(true)} />
      <BottomSheetComponent open={open} onClose={() => setOpened(false)}>
        BOOO
      </BottomSheetComponent>
    </div>
  );
};

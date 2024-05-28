"use client";

import ScreenAvA from "@/components/ScreenAvA/ScreenAvA";
import Modal from "react-modal";

interface ModalAction {
  open: boolean;
  onClose: () => void;
}

const MiniMap = ({ open, onClose }: ModalAction) => {
  return (
    <>
      <ScreenAvA></ScreenAvA>
    </>
  );
};
export default MiniMap;

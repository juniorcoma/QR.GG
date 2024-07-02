import { ComponentType } from 'react';
import { create } from 'zustand';
interface ModalComponentsProps {
  handleClose: () => void;
  callback: (() => void) | null;
  [key: string]: any;
}
interface ModalState {
  active: boolean;
  handleOpen: ({ renderComponent, callback }: { renderComponent: ComponentType<any>; callback?: () => void }) => void;
  handleClose: () => void;
  component: ComponentType<ModalComponentsProps> | null;
  callback: (() => void) | null;
}

const useBottomSheetModal = create<ModalState>()(set => ({
  active: false,
  handleOpen: ({ renderComponent, callback }) => set(() => ({ active: true, component: renderComponent, callback })),
  handleClose: () => set(() => ({ active: false, component: null, callback: null })),
  component: null,
  callback: null,
}));

export default useBottomSheetModal;

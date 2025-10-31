export type VirtualPage = "home" | "gallery";

export type VirtualPageProps = {
  setVirtualPage: (virtualPage: VirtualPage) => void;
};

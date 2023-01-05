export interface BaseInterfaceInfo {
  theme: "dark" | "light";
  navbar: boolean;
  footer: boolean;
  device: "desktop" | "phone";
}

export const baseInterfaceInfo: BaseInterfaceInfo = {
  theme: "dark",
  navbar: true,
  footer: true,
  device: "desktop",
};

// interface/index.ts

export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: string;
  action?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface LayoutProps {
  children: React.ReactNode;
}

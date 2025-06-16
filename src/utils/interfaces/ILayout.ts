import type { IUser } from "../../classes/interfaces/iuser";

export interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
  classNameMain?: string;
  title: string;
  user: IUser;
  footer?: boolean;
}

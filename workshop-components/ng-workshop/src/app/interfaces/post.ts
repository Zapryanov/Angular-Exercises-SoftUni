import { ITheme } from './theme';
import { IUser } from './user';

export interface IPost {
    likes: string[];
    text: string;
    userId: IUser;
    themeId: ITheme;
}

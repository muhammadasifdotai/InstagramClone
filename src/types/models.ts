// whenever we have a question mark after a field name, that means that field is optional.
// ..image?: So image in this case can be of type string, or it can be undefined

export interface IPost {
    id: string;
    createdAt: string;
    image?: string;
    images?: string[];
    video?: string;
    description: string;
    user: IUser;
    nofComments: number;
    nofLikes: number;
    comments: IComment[];
   }
   
   export interface IUser {
    id: string;
    username: string;
    image?: string;
    name: string;
    bio?: string;
    posts?: IPost[];
    website?: string;
   }
   
   export interface IComment {
    id: string;
    comment: string;
    user: IUser;
   }
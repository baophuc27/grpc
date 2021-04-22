export interface UserInfo{
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    dateOfBirth: string;
    avatar?: { key: string; url: string; };
}

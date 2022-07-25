export interface UserListModel {
    id: number;
    amount: number;
    date: Date;
    status: UserStatusModel;
    source: string;
}

export interface UserStatusModel {
    label: string;
    value: string;
}
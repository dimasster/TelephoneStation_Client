export interface Call {
    id: number;
    caller: User;
    target: User;
    callStartDate: Date;
    callTime: number;
    status: CallStatus;
}

export interface Receipt {
    id: number;
    date: Date;
    price: number;
    isBought: boolean;
    type?: string;
    details?: string;
}

export interface Service {
    id: number;
    title?: string;
    subscriptionCost: number;
    costPerMinute: number;
    freeMinutes: number;
}

export interface Subscription {
    id: number;
    user: User;
    service: Service;
    subscriptionStartDate: Date;
    subscriptionEndDate: Date;
}

export interface User {
    id: number;
    name?: string;
    lastName?: string | null;
    phoneNumber: number;
    role: UserRole;
    isBanned: boolean;
    ballance: number;
}

export interface Account {
    login: string;
    password: string;
}
  
export enum CallStatus {
    Initial = 0,
    Started = 1,
    Finished = 2,
    Cancelled = 3,
    Rejected = 4,
}
  
export enum UserRole {
    Unknown = -1,
    New = 0,
    Common = 1,
    Admin = 2,
}
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export type INCREMENT_COUNTER = typeof INCREMENT_COUNTER;

export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export type DECREMENT_COUNTER = typeof DECREMENT_COUNTER;

// action类型
export interface INCREMENT_ACTION_TYPE{
    type:INCREMENT_COUNTER;
    number:number;
}
export interface DECREMENT_ACTION_TYPE{
    type:DECREMENT_COUNTER;
    number:number;
}
export type ACTION_TYPE = INCREMENT_ACTION_TYPE | DECREMENT_ACTION_TYPE;
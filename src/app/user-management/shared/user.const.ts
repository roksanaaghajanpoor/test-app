export const USER_STATUS = [
    { label: "Initial Registration", value: "Initial_Registration" },
    { label: "Pending", value: "Pending" },
    { label: "Active", value: "Active" },
    { label: "De Active", value: "De_Active" }
];

export const USER_LIST = [{
    id: 1,
    amount: 10000,
    date: new Date(),
    status: { label: "Active", value: "Active" },
    source: 'test'
},
{
    id: 2,
    amount: 14000,
    date: new Date('2022/07/15'),
    status: { label: "De Active", value: "De_Active" },
    source: 'test'
},
{
    id: 3,
    amount: 189000,
    date: new Date(),
    status: { label: "Pending", value: "Pending" },
    source: 'test'
},
{
    id: 4,
    amount: 230000,
    date: new Date('2022/05/15'),
    status: { label: "Active", value: "Active" },
    source: 'test'
},
{
    id: 5,
    amount: 5600000,
    date: new Date('2021/07/15'),
    status: { label: "Initial Registration", value: "Initial_Registration" },
    source: 'test'
}];

export const STEP_ITEMS = [{
    label: 'Upload Image',
    routerLink: ["upload-img"]
},
{
    label: 'Get Information',
    routerLink: ["user-form"]
},
{
    label: 'List',
    routerLink: ["user-list"]
},
{
    label: 'Last step',
    routerLink: ["final-step"]
}];
const users = [
    {name: "1", premium: false},
    {name: "2", premium: false},
    {name: "3", premium: true},
    {name: "4", premium: true},
    {name: "5", premium: false},
    {name: "6", premium: true},
    {name: "7", premium: false},
];

const getPremiumUsers = (users) => {
    return users.filter(user => user.premium);
}

export {
    users,
    getPremiumUsers,
}
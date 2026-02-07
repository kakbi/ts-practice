import { User, Post } from './models';

const user1 = new User({
    id: 1,
    name: 'Vadym',
    email: 'vadym@gmail.com',
});

const post1 = new Post({
    id: 101,
    title: 'TypeScript & Webpack',
    content: 'Learning TS with module bundlers',
    authorId: 1,
});

user1.printInfo();
post1.printInfo();

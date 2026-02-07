import { User, Post } from './models';
import { PostService, UserService } from './services';

const userService = new UserService();
const postService = new PostService();

const user1 = new User({
    id: 1,
    name: 'Vadym',
    email: 'vadym@gmail.com',
});

const user2 = new User({
    id: 2,
    name: 'Ivan',
    email: 'ivan@gmail.com',
});

userService.add(user1);
userService.add(user2);

const post1 = new Post({
    id: 101,
    title: 'TypeScript & Webpack',
    content: 'Learning TS with module bundlers',
    authorId: 1,
});

const post2 = new Post({
    id: 102,
    title: 'React',
    content: 'Learning React',
    authorId: 2,
});

const post3 = new Post({
    id: 103,
    title: 'Java',
    content: 'Learning Java',
    authorId: 1,
});

postService.add(post1);
postService.add(post2);
postService.add(post3);

console.log('All users');
userService.getAll().forEach((u) => u.printInfo());

console.log('Posts by Vadym');
postService.getPostsByAuthor(1).forEach((p) => p.printInfo());

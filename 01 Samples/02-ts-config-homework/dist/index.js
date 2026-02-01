"use strict";
var Repository = (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.getById = function (id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                return this.items[id];
            }
        }
        return undefined;
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    Repository.prototype.removeById = function (id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                this.items.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    return Repository;
}());
var User = (function () {
    function User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    return User;
}());
var userRepo = new Repository();
userRepo.add(new User(1, 'Alice', 'alice@gmail.com'));
userRepo.add(new User(2, 'John', 'john@gmail.com'));
console.log('Все пользователи:', userRepo.getAll());
console.log('Пользователь с id=1:', userRepo.getById(1));
console.log('Удаляем пользователя с id=2:', userRepo.removeById(2));
console.log('Осталось:', userRepo.getAll());

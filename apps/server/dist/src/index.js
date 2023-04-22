"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8080;
app.get('/', (req, res) => {
    res.send('My server');
});
app.get('/api/v1', (req, res) => {
    res.send('server');
});
app.get('/api/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = yield response.json();
        res.json(data);
    }
    catch (err) {
        console.log(err);
    }
}));
app.get('/api/posts/:id/comments', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postId = req.params.id;
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const data = yield response.json();
        res.json(data);
    }
    catch (err) {
        console.log(err);
    }
}));
app.get('/api/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = yield response.json();
        res.json(data);
    }
    catch (err) {
        console.log(err);
    }
}));
app.get('/api/users/:id/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.id);
        const responsePosts = yield fetch(`https://jsonplaceholder.typicode.com/posts`);
        const dataPosts = yield responsePosts.json();
        const userPosts = dataPosts.filter(item => item.userId === userId);
        res.json(userPosts);
    }
    catch (err) {
        console.log(err);
    }
}));
app.get('/api/comments', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/comments`);
        const data = yield response.json();
        res.json(data);
    }
    catch (err) {
        console.log(err);
    }
}));
app.listen(PORT, () => console.log('start listening on port', PORT));
//# sourceMappingURL=index.js.map
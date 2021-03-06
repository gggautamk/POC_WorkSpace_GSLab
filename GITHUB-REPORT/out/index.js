"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubService();
if (process.argv.length < 3) {
    console.log('Please pass the username as an argument');
}
else {
    var userName_1 = process.argv[2];
    svc.getUserInfo(userName_1, function (user) {
        svc.getRepos(userName_1, function (repos) {
            user.repos = repos;
            console.log(user);
        });
    });
}

## Installation
使用Nest 发送api/test的请求
并使用管道验证

正确验证，num传入123，调用double，正确结果246
```bash
$ curl -H "Content-Type:application/json" -X POST -d '{"num": 123}' http://localhost:3000/api/test
```
错误验证, num没有传入正确的类型
```bash
$ curl -H "Content-Type:application/json" -X POST -d '{"num": "123"}' http://localhost:3000/api/test
```

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

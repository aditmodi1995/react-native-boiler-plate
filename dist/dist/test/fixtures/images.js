'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DummyImage = {
  data: { picturePath: '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',
    id: '59dcbe8b885f187c86a982f4' },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZGNjMjhjOWE2MGEwMDI2NTdhZjJkNyIsImVtYWlsIjoiYWJjQHh5ei5jb20iLCJpYXQiOjE1MDc2NDAwODcsImV4cCI6MTUwNzY0MTUyN30.7ZAccEJbLErjI7At5ec4Uz8pzjHjmdhF8_lZLxJCAsg'
};

exports.default = DummyImage;
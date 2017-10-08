'use strict';
const knex = require('knex')({
  client: 'mysql',
});
module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnoonymousContext();
    const hasUser = yield app.mysql.query(knex.schema.hasTable('stu').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('stu', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      yield ctx.
    }
    const Student = yield app.mysql.query(knex.schema.hasTable('student').toString());
    if (Student.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('student', function(table) {
        table.increments();
        table.string('姓名').notNullable().defaultTo('');
        table.string('学校').notNullable().defaultTo('');
        table.string('班级').notNullable().defaultTo('');
        // table.integer('学号').notNullable().defaultTo(0);
        table.string('系别').notNullable().defaultTo('');
        table.integer('年龄').notNullable().defaultTo(0);
        table.integer('入学时间').notNullable().defaultTo(0);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }

  });
};


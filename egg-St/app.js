'use strict';
const knex = require('knex')({
  client: 'mysql',
});
module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
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
      ctx.logger.info('some request data');// 上传日志
      yield app.mysql.query(userSchema.toString());
    }
    const user = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (user.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.integer('mobile').notNullable().defaultTo(0);
        table.string('wechat').notNullable().defaultTo('');
        table.integer('投票次数').notNullable().defaultTo(0);
        table.string('type').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'mobile', 'wechat');
    }
    const works = yield app.mysql.query(knex.schema.hasTable('works').toString());
    if (works.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('works', function(table) {
        table.increments();
        table.string('用户ID').notNullable().defaultTo('');
        table.string('状态').notNullable().defaultTo('');
        table.string('型号').notNullable().defaultTo('');
        table.integer('票数').notNullable().defaultTo(0);
        table.integer('URL').notNullable().defaultTo(0);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      ctx.logger.info('some request data');// 上传日志
      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, '用户ID', 'URL');
    }

  });
};


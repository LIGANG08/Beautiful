'use strict';
const knex = require('knex')({
  client: 'mysql',
});
module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();

    const Student = yield app.mysql.query(knex.schema.hasTable('student').toString());
    if (Student.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('student', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('school').notNullable().defaultTo('');
        table.string('class').notNullable().defaultTo('');
        table.string('type').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.integer('time').notNullable().defaultTo(0);
        table.integer('number').notNullable().defaultTo(0);
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
        table.integer('votes').notNullable().defaultTo(0);
        table.string('type').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'user', 'mobile');
      yield ctx.helper.unique(app, 'user', 'wechat');
    }


    const Works = yield app.mysql.query(knex.schema.hasTable('works').toString());
    if (Works.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('works', function(table) {
        table.increments();
        table.string('wechat').notNullable().defaultTo('');
        table.string('type').notNullable().defaultTo('');
        table.integer('votes').notNullable().defaultTo(0);
        table.integer('works').notNullable().defaultTo(0);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');

        // table.bigInteger('name');// 添加一个bigint列，否则添加一个正常整数
        // table.text('name', '[longtext]');// 添加一个文本列，可选textType用于MySql文本数据类型首选项
        // table.float('column', '[precision]', '[scale]');// 添加一个浮点列，可选精度(默认为8)和缩放(默认为2)。
        // table.decimal('column', '[precision]', '[scale]');// 添加一个十进制列，可选精度(默认为8)和缩放(默认为2)。
        // table.timestamp('name', '[standard]');// 添加一个时间戳列，在PostgreSQL中默认为timestamptz，除非true作为第二个参数传递。
      });
      ctx.logger.info('some request data');// 上传日志
      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'works', 'URL');
    }

    const St = yield app.mysql.query(knex.schema.hasTable('st').toString());
    if (St.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('st', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');

        table.float('column', 2, 1).notNullable().defaultTo(0);
        table.time('time').notNullable().defaultTo(0);
        table.text('text', 3);
        table.boolean('boolean').notNullable().defaultTo();
        table.bigInteger('big').notNullable().defaultTo(0);
        table.decimal('dec', [ 2, 1 ]).notNullable().defaultTo(0);
        table.binary('bin', 2).notNullable().defaultTo(0);// 添加一个二进制列，并为MySQL提供可选的长度参数
        table.date('date').notNullable().defaultTo();
        table.dateTime('datetime').notNullable().defaultTo();
        table.enu('enu', [ 1, 2 ]).notNullable().defaultTo(); // 添加一个enum列(别名enu，因为enum是JavaScript中的保留字)。注意，第二个参数是一个值数组
      });
      yield app.mysql.query(userSchema.toString());
    }


  });
};


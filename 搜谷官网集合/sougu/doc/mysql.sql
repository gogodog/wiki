-- 用户表
DROP TABLE IF EXISTS sys_user;
CREATE TABLE sys_user (
  id varchar(64) NOT NULL COMMENT '用户id',
  username varchar(50) NOT NULL COMMENT '账户名称',
  salt varchar(20) DEFAULT NULL COMMENT '加密盐值',
  password varchar(200) NOT NULL COMMENT '用户密码密文',
  phone varchar(20) DEFAULT NULL COMMENT '手机号码',
  dept_id varchar(64) DEFAULT NULL COMMENT '部门id',
  real_name varchar(60) DEFAULT NULL COMMENT '真实名称',
  nick_name varchar(60) DEFAULT NULL COMMENT '昵称',
  email varchar(50) DEFAULT NULL COMMENT '邮箱(唯一)',
  status tinyint(4) COMMENT '账户状态(1.正常 2.锁定 )',
  sex tinyint(4) COMMENT '性别(1.男 2.女)',
  deleted tinyint(4)  COMMENT '是否删除(1未删除；0已删除)',
  create_id varchar(64) DEFAULT NULL COMMENT '创建人',
  update_id varchar(64) DEFAULT NULL COMMENT '更新人',
  create_where tinyint(4) COMMENT '创建来源(1.web 2.android 3.ios )',
  create_time datetime DEFAULT NULL COMMENT '创建时间',
  update_time datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统用户';

INSERT INTO sys_user(id, username, salt, password, phone, dept_id, real_name, nick_name, email, status, sex, deleted, create_id, update_id, create_where, create_time, update_time) VALUES ('1', 'admin', '324ce32d86224b00a02b', '2102b59a75ab87616b62d0b9432569d0', '13888888888', '1', '爷青回', 'Prescott.Wen', 'xxxxxx@163.com', 1, 2, 1, '1', '1', 3, '2019-09-22 19:38:05', '2021-07-18 09:15:22');

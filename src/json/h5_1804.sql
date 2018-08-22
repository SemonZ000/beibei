/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1804

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-22 13:27:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for beibei
-- ----------------------------
DROP TABLE IF EXISTS `beibei`;
CREATE TABLE `beibei` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `sale` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `Discount` varchar(255) DEFAULT NULL,
  `regtime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of beibei
-- ----------------------------
INSERT INTO `beibei` VALUES ('23', '维达超韧3层120抽', '46.90', '139.8', '\"img/index1.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('24', '植护婴儿亲肤水洗衣液瓶装', '56.90', '239.8', '\"img/index2.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('25', '秋冬婴幼儿保暖棉服内胆', '46.90', '139.8', '\"img/index3.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('26', '大牛排澳洲家庭儿童菲力', '46.90', '139.8', '\"img/index3.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('27', '买一箱送一箱网红酸奶', '46.90', '139.8', '\"img/index4.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('28', '巴布豆秋季潮流毛毛虫爆款上新', '46.90', '139.8', '\"img/index5.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('29', '女童套装连帽运动休闲两件套', '46.90', '139.8', '\"img/index6.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('30', '欢喜小熊婴幼儿秋季居家内衣', '46.90', '139.8', '\"img/index7.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('31', '洛夫铅笔橡皮擦削笔器开学套装', '46.90', '139.8', '\"img/index8.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('32', 'ILISYA柔色初学者彩妆套装', '46.90', '139.8', '\"img/index10.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('33', 'ILISYA柔色初学者彩妆套装', '46.90', '139.8', '\"img/index10.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('34', 'ILISYA柔色初学者彩妆套装', '46.90', '139.8', '\"img/index10.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('35', 'ILISYA柔色初学者彩妆套装', '46.90', '139.8', '\"img/index10.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('36', 'ILISYA柔色初学者彩妆套装', '46.90', '139.8', '\"img/index10.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('37', 'ILISYA柔色初学者彩妆套装', '46.90', '139.8', '\"img/index10.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('38', 'ILISYA柔色初学者彩妆套装', '46.90', '139.8', '\"img/index9.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('39', 'ILISYA柔色初学者彩妆套装', '46.90', '139.8', '\"img/index10.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('40', 'ILISYA柔色初学者彩妆套装', '46.90', '139.8', '\"img/index10.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('41', '欢喜小熊婴幼儿秋季居家内衣', '56.90', '239.8', '\"img/index9.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('42', '欢喜小熊婴幼儿秋季居家内衣', '56.90', '239.8', '\"img/index4.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('43', '欢喜小熊婴幼儿秋季居家内衣', '56.90', '239.8', '\"img/index5.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('44', '欢喜小熊婴幼儿秋季居家内衣', '56.90', '239.8', '\"img/index9.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('45', '欢喜小熊婴幼儿秋季居家内衣', '56.90', '239.8', '\"img/index9.jpg\"', '3.4折', null);
INSERT INTO `beibei` VALUES ('46', '欢喜小熊婴幼儿秋季居家内衣', '56.90', '239.8', '\"img/index9.jpg\"', '3.4折', null);

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `name` varchar(255) NOT NULL,
  `prise` int(255) NOT NULL,
  `sale` varchar(255) NOT NULL,
  `save` varchar(255) NOT NULL,
  `imger` varchar(255) NOT NULL,
  `dao` varchar(255) NOT NULL,
  `regtime` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`name`,`regtime`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of goods
-- ----------------------------

-- ----------------------------
-- Table structure for ifiname
-- ----------------------------
DROP TABLE IF EXISTS `ifiname`;
CREATE TABLE `ifiname` (
  `id` int(11) NOT NULL,
  `ifiname` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `regtime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ifiname
-- ----------------------------
INSERT INTO `ifiname` VALUES ('1', '热门商品', '\"img\":\"../img/xiao2.png\"', '2018-08-21 16:04:42');
INSERT INTO `ifiname` VALUES ('2', '热门商品', '\"img\":\"../img/xiao1.png\"', null);
INSERT INTO `ifiname` VALUES ('3', '热门商品', '\"img\":\"../img/xiao3.png\"', null);
INSERT INTO `ifiname` VALUES ('4', '热门商品', '\"img\":\"../img/xiao4.png\"', '2018-08-21 16:06:03');
INSERT INTO `ifiname` VALUES ('5', '热门商品', '\"img\":\"../img/xiao3.png\"', '2018-08-21 16:06:05');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uesrname` varchar(255) NOT NULL,
  `userpass` varchar(255) NOT NULL,
  `regtime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------

-- ----------------------------
-- Table structure for username
-- ----------------------------
DROP TABLE IF EXISTS `username`;
CREATE TABLE `username` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of username
-- ----------------------------
INSERT INTO `username` VALUES ('1', 'zhou', '123456', '2018-08-21 22:01:39');
INSERT INTO `username` VALUES ('2', 'li', '9999ddd', '2018-08-22 09:54:31');
INSERT INTO `username` VALUES ('3', 'wang', '1234488', '2018-08-22 09:59:52');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------

-- ----------------------------
-- Table structure for usertable
-- ----------------------------
DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT COMMENT '系统id',
  `username` varchar(30) CHARACTER SET utf8 NOT NULL,
  `userpwd` varchar(40) NOT NULL,
  `regtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '用户注册时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of usertable
-- ----------------------------
INSERT INTO `usertable` VALUES ('4', 'li', '888888', '2018-08-04 16:19:01');
INSERT INTO `usertable` VALUES ('3', 'zhou', '123456', '2018-08-04 16:19:01');
SET FOREIGN_KEY_CHECKS=1;

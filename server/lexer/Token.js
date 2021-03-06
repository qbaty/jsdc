var Class = require('../util/Class'),
	character = require('../util/character'),
	types = {},
	Token = Class(function(type, content) {
		this.t = type;
		this.c = content;
	}).methods({
		type: function(t) {
			if(!character.isUndefined(t)) {
				this.t = t;
			}
			return this.t;
		},
		content: function() {
			return this.c;
		},
		tag: function() {
			return Token.type(this.t);
		},
		val: function() {
			if(this.t == Token.SIGN || this.t == Token.KEYWORD) {
				return this.c;
			}
			return Token.type(this.t);
		}
	}).statics({
		VIRTUAL: -1,
		OTHER: 0,
		BLANK: 1,
		TAB: 2,
		LINE: 3,
		NUMBER: 4,
		ID: 5,
		COMMENT: 6,
		STRING: 7,
		SIGN: 8,
		REG: 9,
		KEYWORD: 10,
		ANNOT: 11,
		HEAD: 12,
		TEMPLATE: 13,
		ENTER: 14,
		type: function(tag) {
			return types[tag];
		}
	});
Object.keys(Token).forEach(function(o) {
	types[Token[o]] = o.toLowerCase();
});
module.exports = Token;

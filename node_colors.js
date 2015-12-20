var node_colors = function() {
	this.fColors = {
		def: '39m',
		gray: '90m',
		red: '91m',
		green: '92m',
		yellow: '93m',
		blue: '94m',
		purple: '95m',
		turquoise: '96m',
		white: '97m',
		black: '30m',
	},
	this.bColors = {
		def: '49m',
		gray: '107m',
		red: '40m',
		green: '41m',
		yellow: '42m',
		blue: '43m',
		purple: '44m',
		turquoise: '45m',
		white: '46m',
		black: '47m'
	},
	this.rColors = {
		f: ['90m', '91m',
			'92m', '93m',
			'94m', '95m',
			'96m', '97m',
			'30m'
		],
		b: ['107m', '40m',
			'41m', '42m',
			'43m', '44m',
			'45m', '46m',
			'47m'
		]
	},
	this.rnd = function(text) {
		console.log('\u001b[' + this.rColors.b[Math.round(Math.random() * 8)] +
			'\u001b[' + this.rColors.f[Math.round(Math.random() * 8)] + text);
	},
	this.set = function(text, fcolor, bcolor) {
		console.log('\x1b[49m \x1b[39m' + '\x1b[' + this.bColors.r[bcolor] +
			'\x1b[' + this.fColors[fcolor] + text + '\x1b[49m \x1b[39m');
	},
	this.def = function() {
		console.log('\x1b[49m \x1b[39m');
	},
	this.clr = function() {
		console.log('\033c');
	},
	this.brk = function() {
		console.log('\u0085');
	}
}

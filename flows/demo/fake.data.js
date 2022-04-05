const menu = [
	{
		id: 1,
		name: 'Pet',
		path: '/x/Table/pet',
		icon: 'icon-twitch',
		rank: 1,
		status: 'enabled',
		visible_menu: 1,
		blocks: 0,
		parent: null
	},
	{
		parent: 1,
		id: 2,
		name: 'Pet List',
		path: '/x/Table/pet',
		icon: '',
		rank: 1,
		status: 'enabled',
		visible_menu: 1,
		blocks: 0
	},
	{
		parent: 1,
		id: 3,
		name: 'Add Pet',
		path: '/x/Form/pet',
		icon: '',
		rank: 2,
		status: 'enabled',
		visible_menu: 1,
		blocks: 0
	},
	{
		id: 4,
		name: 'Doctor',
		path: '/x/Table/doctor',
		icon: 'icon-users',
		rank: 2,
		status: 'enabled',
		visible_menu: 1,
		blocks: 0,
		parent: null
	},
	{
		parent: 4,
		id: 5,
		name: 'Doctor List',
		path: '/x/Table/doctor',
		icon: '',
		rank: 1,
		status: 'enabled',
		visible_menu: 1,
		blocks: 0
	},
	{
		parent: 4,
		id: 6,
		name: 'Add Doctor',
		path: '/x/Form/doctor',
		icon: '',
		rank: 2,
		status: 'enabled',
		visible_menu: 1,
		blocks: 0
	},
	{
		parent: null,
		id: 7,
		name: 'Archive',
		path: '/x/Table/archive',
		icon: 'icon-folder',
		rank: 3,
		status: 'enabled',
		visible_menu: 1,
		blocks: 0
	},
	{
		parent: 7,
		id: 8,
		name: 'Archive List',
		path: '/x/Table/archive',
		icon: '',
		rank: 1,
		status: 'enabled',
		visible_menu: 1,
		blocks: 0
	},
	{
		parent: 7,
		id: 9,
		name: 'Add Archive',
		path: '/x/Form/archive',
		icon: '',
		rank: 2,
		status: 'enabled',
		visible_menu: 1,
		blocks: 0
	},
	{
		parent: null,
		id: 10,
		name: 'Department',
		path: '/x/Table/department',
		icon: 'icon-map',
		rank: 4,
		status: 'enabled',
		visible_menu: 0,
		blocks: 0
	},
	{
		parent: null,
		id: 11,
		name: 'Case',
		path: '/x/Table/case',
		icon: 'icon-file',
		rank: 5,
		status: 'enabled',
		visible_menu: 0,
		blocks: 0
	},
	{
		parent: null,
		id: 12,
		name: 'Finance',
		path: '/x/Table/finance',
		icon: 'icon-dollar-sign',
		rank: 6,
		status: 'enabled',
		visible_menu: 0,
		blocks: 0
	},
	{
		parent: null,
		id: 13,
		name: 'Help',
		path: '/x/Table/help',
		icon: 'icon-help-circle',
		rank: 7,
		status: 'enabled',
		visible_menu: 0,
		blocks: 0
	},
	{
		parent: null,
		id: 14,
		name: 'Disease',
		path: '/x/Table/disease',
		icon: 'icon-clipboard',
		rank: 8,
		status: 'enabled',
		visible_menu: 0,
		blocks: 0
	}
]

const admin = [
	{
		name: 'Tyler Kwon',
		type: 'admin',
		email: 'xiang@iqka.com',
		mobile: null,
		password: 'A123456p+',
		status: 'enabled',
		extra: {}
	}
]

const user = [
	{
		id: 1,
		name: 'Robert',
		nickname: 'Victor',
		mobile: '13439882351',
		password: 'A+123abc'
	},
	{
		id: 2,
		name: 'Julian',
		nickname: 'Victor',
		mobile: '18696486865',
		password: 'A+123abc'
	}
]

const pet = [
	{
		id: 1,
		name: '毛毛',
		type: 'cat',
		status: 'curing',
		stay: 3,
		cost: 2000,
		doctor_id: [1, 4, 6]
	},
	{
		id: 2,
		name: '阿布',
		type: 'dog',
		status: 'curing',
		stay: 6,
		cost: 4200,
		doctor_id: [2, 4]
	},
	{
		id: 3,
		name: '咪咪',
		type: 'others',
		status: 'cured',
		stay: 7,
		cost: 6000,
		doctor_id: [3, 5]
	},
	{
		id: 4,
		name: '狗蛋',
		type: 'dog',
		status: 'checked',
		stay: 1,
		cost: 1000,
		doctor_id: [6]
	},
	{
		id: 5,
		name: '毛毛',
		type: 'cat',
		status: 'curing',
		stay: 3,
		cost: 2000,
		doctor_id: [1, 4, 6]
	},
	{
		id: 6,
		name: '阿布',
		type: 'dog',
		status: 'curing',
		stay: 6,
		cost: 4200,
		doctor_id: [2, 4]
	},
	{
		id: 7,
		name: '咪咪',
		type: 'others',
		status: 'cured',
		stay: 7,
		cost: 6000,
		doctor_id: [3, 5]
	},
	{
		id: 8,
		name: '狗蛋',
		type: 'dog',
		status: 'checked',
		stay: 1,
		cost: 1000,
		doctor_id: [6]
	},
	{
		id: 9,
		name: '毛毛',
		type: 'cat',
		status: 'curing',
		stay: 3,
		cost: 2000,
		doctor_id: [1, 4, 6]
	},
	{
		id: 10,
		name: '阿布',
		type: 'dog',
		status: 'curing',
		stay: 6,
		cost: 4200,
		doctor_id: [2, 4]
	},
	{
		id: 11,
		name: '咪咪',
		type: 'others',
		status: 'cured',
		stay: 7,
		cost: 6000,
		doctor_id: [3, 5]
	},
	{
		id: 12,
		name: '狗蛋',
		type: 'dog',
		status: 'checked',
		stay: 1,
		cost: 1000,
		doctor_id: [6]
	},
	{
		id: 13,
		name: '毛毛',
		type: 'cat',
		status: 'curing',
		stay: 3,
		cost: 2000,
		doctor_id: [1, 4, 6]
	},
	{
		id: 14,
		name: '阿布',
		type: 'dog',
		status: 'curing',
		stay: 6,
		cost: 4200,
		doctor_id: [2, 4]
	},
	{
		id: 15,
		name: '咪咪',
		type: 'others',
		status: 'cured',
		stay: 7,
		cost: 6000,
		doctor_id: [3, 5]
	},
	{
		id: 16,
		name: '狗蛋',
		type: 'dog',
		status: 'checked',
		stay: 1,
		cost: 1000,
		doctor_id: [6]
	}
]

const doctor = [
	{
		id: 1,
		name: '张嘻嘻',
		nickname: '嘻嘻',
		title: '高级医师',
		type: '医生',
		status: '工作中',
		in: '2016-08-09',
		cured: 126,
		salary: 15000
	},
	{
		id: 2,
		name: '李哈哈',
		nickname: '哈哈',
		title: '实习医师',
		type: '医生',
		status: '工作中',
		in: '2021-08-09',
		cured: 3,
		salary: 5000
	},
	{
		id: 3,
		name: '孙皮蛋',
		nickname: '皮总',
		title: '高级医师',
		type: '医生',
		status: '出差中',
		in: '2010-04-03',
		cured: 208,
		salary: 18000
	},
	{
		id: 4,
		name: '王五',
		nickname: '小五',
		title: '实习护理',
		type: '护理人员',
		status: '工作中',
		in: '2022-01-03',
		cured: 2,
		salary: 3600
	},
	{
		id: 5,
		name: '钱小花',
		nickname: '花姐',
		title: '高级护理',
		type: '护理人员',
		status: '休假中',
		in: '2015-05-06',
		cured: 369,
		salary: 7000
	},
	{
		id: 6,
		name: '赵麻子',
		nickname: '麻子',
		title: '',
		type: '临时工',
		status: '工作中',
		in: '2022-01-03',
		cured: 2,
		salary: 3600
	}
]

function main() {
	return {
		menu,
		admin,
		user,
		pet,
		doctor
	}
}

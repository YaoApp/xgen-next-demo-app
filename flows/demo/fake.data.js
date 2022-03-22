function main() {
	return {
		menu: [
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
		],
		admin: [
			{
				name: 'Tyler Kwon',
				type: 'admin',
				email: 'xiang@iqka.com',
				mobile: null,
				password: 'A123456p+',
				status: 'enabled',
				extra: {}
			}
		],
		user: [
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
	}
}

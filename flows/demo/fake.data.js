function main() {
	return {
		menu: [
			{
				id: 1,
				name: 'Pet',
				path: '/x/table/pet',
				icon: 'icon-twitch',
				rank: 1,
				status: 'enabled',
				visible_menu: 0,
				blocks: 0,
				parent: null
			},
			{
				parent: 1,
				id: 2,
				name: 'Pet',
				path: '/x/table/pet',
				icon: '',
				rank: 1,
				status: 'enabled',
				visible_menu: 0,
				blocks: 0
			},
			{
				parent: 1,
				id: 3,
				name: 'Add Pet',
				path: '/x/form/pet',
				icon: '',
				rank: 2,
				status: 'enabled',
				visible_menu: 0,
				blocks: 0
			},
			{
				id: 4,
				name: 'Doctor',
				path: '/x/table/doctor',
				icon: 'icon-users',
				rank: 1,
				status: 'enabled',
				visible_menu: 0,
				blocks: 0,
				parent: null
			},
			{
				parent: 4,
				id: 5,
				name: 'Doctor',
				path: '/x/table/doctor',
				icon: '',
				rank: 1,
				status: 'enabled',
				visible_menu: 0,
				blocks: 0
			},
			{
				parent: 4,
				id: 6,
				name: 'Add Doctor',
				path: '/x/form/doctor',
				icon: '',
				rank: 2,
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

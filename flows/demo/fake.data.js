function main() {
	return {
		menu: [
			{
				id: 1,
				name: 'Table',
				path: '/table/service',
				icon: 'icon-layout',
				rank: 1,
				status: 'enabled',
				visible_menu: 0,
				blocks: 0,
				parent: null
			},
			{
				id: 2,
				name: 'Form',
				path: '/form/service',
				icon: '',
				rank: 1,
				status: 'enabled',
				visible_menu: 0,
				blocks: 0,
				parent: 1
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

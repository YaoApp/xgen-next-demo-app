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
			},
			{
				name: 'Alfonso Morales',
				type: 'staff',
				email: 'staff@iqka.com',
				mobile: null,
				password: 'S123456p+',
				status: 'enabled',
				extra: {}
			}
		]
	}
}

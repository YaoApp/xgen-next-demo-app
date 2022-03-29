function main() {
	return {
		primary: 'id',
		header: {
			preset: {
				batch: {
					columns: [
						{
							name: '名称',
							width: 12
						}
					],
					delete: true
				},
				import: {
					bind: 'order'
				}
			},
			actions: [
				{
					title: '页面跳转',
					icon: 'icon-airplay',
					props: {
						type: 'history.push',
						payload: '/404'
					}
				}
			]
		},
		filter: {
			btnAddText: '新增宠物',
			columns: [
				{
					name: '名称',
					width: 4
				},
				{
					name: '名称',
					width: 4
				},
				{
					name: '名称',
					width: 4
				},
				{
					name: '名称',
					width: 4
				},
				{
					name: '名称',
					width: 4
				}
			]
		},
		table: {
			props: {
				scroll: {
					x: 1200
				}
			},
			columns: [
				{
					name: '名称'
				}
			],
			actions: [
				{
					title: '查看-Modal',
					icon: 'icon-eye',
					props: {
						type: 'view',
						useModal: true,
						formName: 'menu',
						formId: ':id'
					}
				}
			]
		},
		fileds: {
			filter: {
				名称: {
					bind: 'where.name.like',
					edit: {
						type: 'Input',
						props: {
							placeholder: '请输入宠物名称'
						}
					}
				}
			},
			table: {
				名称: {
					bind: 'name',
					view: {
						type: 'Text',
						props: {}
					},
					edit: {
						type: 'Input',
						props: {
							placeholder: '请输入宠物名称'
						}
					}
				}
			}
		}
	}
}

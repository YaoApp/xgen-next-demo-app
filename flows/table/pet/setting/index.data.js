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
				}
			]
		},
		table: {
			props: {},
			columns: [
				{
					name: '名称'
				},
				{
					name: '消费金额'
				}
			],
			operation: {
				fold: false,
				actions: [
					{
						title: '查看',
						icon: 'icon-eye',
						action: {
							'Common.openModal': {
								Form: {
									type: 'view',
									model: 'pet'
								}
							}
						}
					},
					{
						title: '编辑',
						icon: 'icon-edit-2',
						action: {
							'Common.openModal': {
								Form: {
									type: 'edit',
									model: 'pet'
								}
							}
						}
					},
					{
						title: '删除',
						icon: 'icon-trash-2',
						action: {
							'Table.delete': {}
						},
						style: 'danger',
						confirm: {
							title: '确认删除，删除后数据无法恢复？'
						}
					}
				]
			}
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
				},
				消费金额: {
					bind: 'cost',
					view: {
						type: 'Text',
						props: {}
					},
					edit: {
						type: 'Input',
						props: {}
					}
				}
			}
		}
	}
}

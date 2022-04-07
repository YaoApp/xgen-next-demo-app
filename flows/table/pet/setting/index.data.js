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
					name: '状态'
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
						title: '治愈',
						icon: 'icon-check',
						action: {
							'Table.save': {
								id: ':id',
								status: 'cured'
							}
						},
						style: 'success',
						confirm: {
							title: '提示',
							desc: '确认变更为治愈状态？'
						}
					},
					{
						title: '跳转查看',
						icon: 'icon-book-open',
						action: {
							'Common.historyPush': {
								pathname: '/x/Form/pet/:id'
							}
						}
					},
					{
						title: '返回上一页',
						icon: 'icon-arrow-left',
						action: {
							'Common.historyBack': {}
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
							title: '提示',
							desc: '确认删除，删除后数据无法恢复？'
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
				状态: {
					bind: 'status',
					view: {
						type: 'Text',
						props: {}
					},
					edit: {
						type: 'Select',
						props: {
							xProps: {
								search: {
									api: '/api/mock/Select',
									key: 'keywords',
									params: {
										id: ':id',
										doctor_id: ':doctor_id',
										select: 'label,value'
									}
								}
							}
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

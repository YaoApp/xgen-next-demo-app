function main() {
	return {
		name: '宠物',
		primary: 'id',
		operation: {
			preset: {
				save: { back: true },
				back: {}
			},
			actions: [
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
				}
			]
		},
		form: {
			props: {},
			sections: [
				{
					title: '基础信息',
					desc: '宠物的一些基本信息',
					columns: [
						{
							width: 24,
							tabs: [
								{
									title: 'Base',
									columns: [
										{
											name: 'ID',
											width: 12
										},
										{
											name: '名称',
											width: 12
										}
									]
								},
								{
									title: 'More',
									columns: [
										{
											name: '类型',
											width: 12
										},
										{
											name: '状态',
											width: 12
										}
									]
								}
							]
						}
					]
				},
				{
					title: '基础信息',
					desc: '宠物的一些基本信息',
					columns: [
						{
							name: 'ID',
							width: 12
						},
						{
							name: '名称',
							width: 12
						},
						{
							name: '类型',
							width: 12
						},
						{
							name: '状态',
							width: 12
						}
					]
				},
				{
					title: '更多资料',
					desc: '更为详细的宠物信息',
					columns: [
						{
							name: '住院天数',
							width: 8
						},
						{
							name: '消费金额',
							width: 8
						},
						{
							name: '关联人员',
							width: 8
						}
					]
				}
			]
		},
		fileds: {
			form: {
				ID: {
					bind: 'id',
					edit: {
						type: 'Input',
						props: {
							disabled: true
						}
					}
				},
				名称: {
					bind: 'name',
					edit: {
						type: 'Input',
						props: {
							placeholder: '请输入宠物名称'
						}
					}
				},
				类型: {
					bind: 'type',
					edit: {
						type: 'Select',
						props: {
							options: [
								{ label: '狗狗', value: 'dog' },
								{ label: '猫猫', value: 'cat' },
								{ label: '其他', value: 'others' }
							]
						}
					}
				},
				状态: {
					bind: 'status',
					edit: {
						type: 'Select',
						props: {
							xProps: {
								remote: {
									api: '/api/mock/Select',
									params: {
										select: 'label,value'
									}
								}
							}
						}
					}
				},
				住院天数: {
					bind: 'stay',
					edit: {
						type: 'Input',
						props: {}
					}
				},
				消费金额: {
					bind: 'cost',
					edit: {
						type: 'Input',
						props: {}
					}
				},
				关联人员: {
					bind: 'doctor_id',
					edit: {
						type: 'Input',
						props: {}
					}
				}
			}
		},
		config: {
			showAnchor: true
		}
	}
}

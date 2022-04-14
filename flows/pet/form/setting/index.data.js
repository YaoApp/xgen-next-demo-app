function main() {
	return {
		primary: 'id',
		operation: {
			preset: {
				save: { back: false },
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
									title: 'Tab 1',
									columns: [
										{ name: '名称', width: 12 },
										{ name: '状态', width: 12 }
									]
								},
								{
									title: 'Tab 2',
									columns: [
										{ name: '名称', width: 12 },
										{ name: '状态', width: 12 }
									]
								}
							]
						},
						{
							width: 24,
							tabs: [
								{
									title: 'Tab 1',
									columns: [
										{
											width: 12,
											tabs: [
												{
													title: 'Inner Tab 1',
													columns: [
														{
															name: '名称',
															width: 12
														},
														{
															name: '状态',
															width: 12
														}
													]
												},
												{
													title: 'Inner Tab 2',
													columns: [
														{
															name: '名称',
															width: 12
														},
														{
															name: '状态',
															width: 12
														}
													]
												}
											]
										},
										{
											width: 12,
											tabs: [
												{
													title: 'Inner Tab 1',
													columns: [
														{
															name: '名称',
															width: 12
														},
														{
															name: '状态',
															width: 12
														}
													]
												},
												{
													title: 'Inner Tab 2',
													columns: [
														{
															name: '名称',
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
									title: 'Tab 2',
									columns: [
										{ name: '名称', width: 12 },
										{ name: '状态', width: 12 }
									]
								}
							]
						},
						{
							name: '名称',
							width: 8
						},
						{
							name: '状态',
							width: 8
						},
						{
							name: '消费金额',
							width: 8
						}
					]
				},
				{
					title: '更多资料',
					desc: '更为详细的宠物信息',
					columns: [
						{
							name: '名称',
							width: 8
						},
						{
							name: '状态',
							width: 8
						},
						{
							name: '消费金额',
							width: 8
						}
					]
				}
			]
		},
		fileds: {
			form: {
				名称: {
					bind: 'name',
					edit: {
						type: 'Input',
						props: {
							placeholder: '请输入宠物名称'
						}
					}
				},
				状态: {
					bind: 'status',
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
					edit: {
						type: 'Input',
						props: {}
					}
				}
			}
		}
	}
}

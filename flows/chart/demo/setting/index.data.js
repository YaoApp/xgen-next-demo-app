function main() {
	return {
		name: '宠物医院数据图表',
		operation: {
			actions: [
				{
					title: '跳转至大屏',
					icon: 'icon-airplay',
					action: {
						'Common.historyPush': {
							pathname: '/x/Cool/demo'
						}
					}
				}
			]
		},
		filter: {
			columns: [
				{
					name: '时间区间',
					width: 6
				}
			]
		},
		chart: {
			columns: [
				{
					name: '宠物数量',
					width: 6
				},
				{
					name: '宠物类型',
					width: 6
				},
				{
					name: '当月收入',
					width: 6
				},
				{
					name: '医师数量',
					width: 6
                        },
                        {
					name: '宠物数量_上月',
					width: 6
				},
				{
					name: '宠物类型_上月',
					width: 6
				},
				{
					name: '当月收入_上月',
					width: 6
				},
				{
					name: '医师数量_上月',
					width: 6
				},
				{
					name: '类型排布',
					width: 12
				},
				{
					name: '状态分布',
					width: 12
				},
				{
					name: '综合消费',
					width: 24
				}
			]
		},
		fileds: {
			filter: {
				时间区间: {
					bind: 'range',
					edit: {
						type: 'RangePicker',
						props: {}
					}
				}
			},
			chart: {
				宠物数量: {
					bind: 'pet_count',
					link: '/x/Table/pet',
					view: {
						type: 'Number',
						props: {
							unit: '个'
						}
					}
				},
				宠物类型: {
					bind: 'pet_type',
					view: {
						type: 'Number',
						props: {
							unit: '种'
						}
					}
				},
				当月收入: {
					bind: 'income_monthly',
					view: {
						type: 'Number',
						props: {
							unit: '元',
						}
					}
				},
				医师数量: {
					bind: 'doctor_count',
					view: {
						type: 'Number',
						props: {
							unit: '个'
						}
					}
                        },
                        宠物数量_上月: {
					bind: 'prev_pet_count',
					link: '/x/Table/pet',
					cardStyle: { padding: 0 },
					view: {
						type: 'Number',
						props: {
                                          unit: '个',
							prev_title: '上月数据'
						}
					}
				},
				宠物类型_上月: {
                              bind: 'prev_pet_type',
                              link: '/x/Table/pet',
					cardStyle: { padding: 0 },
					view: {
						type: 'Number',
						props: {
                                          unit: '种',
							prev_title: '上月数据'
						}
					}
				},
				当月收入_上月: {
                              bind: 'prev_income_monthly',
                              link: '/x/Table/pet',
					cardStyle: { padding: 0 },
					view: {
						type: 'Number',
						props: {
							unit: '元',
							prev_title: '上月数据'
						}
					}
				},
				医师数量_上月: {
                              bind: 'prev_doctor_count',
                              link: '/x/Table/pet',
					cardStyle: { padding: 0 },
					view: {
						type: 'Number',
						props: {
                                          unit: '个',
							prev_title: '上月数据'
						}
					}
                        },
				类型排布: {
					bind: 'datasource_type',
					link: '/x/Table/pet',
					view: {
						type: 'Pie',
						props: {
							height: 240,
							base: 'type',
							series: [
								{
									name: 'count',
									type: 'pie',
									roseType: 'area',
									radius: [10, 100],
									center: ['60%', '50%'],
									itemStyle: {
										borderRadius: 3
									}
								}
							]
						}
					},
					refer: {
						type: 'Table',
						props: {
							columns: [
								{
									title: '类型',
									dataIndex: 'type'
								},
								{
									title: '数量',
									dataIndex: 'count'
								}
							]
						}
					}
				},
				状态分布: {
					bind: 'datasource_status',
					view: {
						type: 'Bar',
						props: {
							height: 240,
							base: 'status',
							axisLabel: {
								interval: 0,
								fontSize: 12
							},
							series: [
								{
									name: 'count',
									type: 'bar',
									colorBy: 'data',
									itemStyle: {
										borderRadius: 3
									},
									splitLine: {
										show: false
									},
									axisLabel: {
										show: false
									}
								}
							]
						}
					},
					refer: {
						type: 'Table',
						props: {
							columns: [
								{
									title: '状态',
									dataIndex: 'status'
								},
								{
									title: '数量',
									dataIndex: 'count'
								}
							]
						}
					}
				},
				综合消费: {
					bind: 'datasource_cost',
					view: {
						type: 'LineBar',
						props: {
							height: 240,
							base: 'name',
							axisLabel: {
								interval: 0,
								fontSize: 12
							},
							series: [
								{
									name: 'stay',
									type: 'line',
									smooth: true,
									symbolSize: 8,
									itemStyle: {
										borderRadius: 6
									},
									splitLine: {
										show: false
									},
									axisLabel: {
										show: false
									}
								},
								{
									name: 'cost',
									type: 'bar',
									itemStyle: {
										borderRadius: 6
									},
									splitLine: {
										show: false
									},
									axisLabel: {
										show: false
									}
								}
							]
						}
					}
				}
			}
		}
	}
}

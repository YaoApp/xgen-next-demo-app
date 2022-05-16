function main() {
	return {
		name: '宠物医院数据图表',
		operation: {
			actions: [
				{
					title: '跳转至大屏',
					icon: 'icon-airplay',
					props: {
						type: 'history.push',
						payload: '/x/Cool/demo'
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
				类型排布: {
					bind: 'datasource_type',
					view: {
						type: 'Pie',
						props: {
							height: 240,
							x_key: 'type',
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
							height: 240,
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
							x_key: 'status',
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
							height: 240,
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
							x_key: 'name',
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

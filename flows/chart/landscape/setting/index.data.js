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
		chart: {
			columns: [
				{
					name: '访客情况',
					width: 12
				}
			]
		},
		fileds: {
			chart: {
				访客情况: {
					bind: 'visit_condition',
					view: {
						type: 'Funnel',
						props: {
							nameKey: 'name',
							series: [
								{
									valueKey: 'value',
									top: 48
								}
							]
						}
					}
				}
			}
		}
	}
}

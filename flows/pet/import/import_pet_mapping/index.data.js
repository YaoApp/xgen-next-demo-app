function main() {
	return {
		primary: 'field',
		table: {
			props: {},
			columns: [
				{
					name: '字段名称'
				},
				{
					name: '数据源'
				},
				{
					name: '清洗规则'
				},
				{
					name: '数据示例'
				}
			],
			operation: {
				hide: true
			}
		},
		fileds: {
			table: {
				字段名称: {
					bind: 'label',
					view: {
						type: 'Text',
						props: {}
					}
				},
				数据源: {
					bind: 'axis',
					view: {
						type: 'Tag',
						props: {
							options: [
								{
									label: '名称',
									value: 'A1'
								},
								{
									label: '类型',
									value: 'B1'
								},
								{
									label: '入院状态',
									value: 'C1'
								},
								{
									label: '状态',
									value: 'D1'
								},
								{
									label: '入院时间',
									value: 'E1'
								},
								{
									label: '花费',
									value: 'F1'
								}
							],
							pure: true
						}
					},
					edit: {
						type: 'Select',
						props: {
							options: [
								{
									label: '名称',
									value: 'A1'
								},
								{
									label: '类型',
									value: 'B1'
								},
								{
									label: '入院状态',
									value: 'C1'
								},
								{
									label: '状态',
									value: 'D1'
								},
								{
									label: '入院时间',
									value: 'E1'
								},
								{
									label: '花费',
									value: 'F1'
								}
							]
						}
					}
				},
				清洗规则: {
					bind: 'rules',
					view: {
						type: 'Tag',
						props: {
							options: [
								{
									label: 'test_a',
									value: 'scripts.rules.test_a'
								},
								{
									label: 'test_b',
									value: 'scripts.rules.test_b'
								},
								{
									label: 'test_c',
									value: 'scripts.rules.test_c'
								},
								{
									label: 'test_d',
									value: 'scripts.rules.test_d'
								}
							]
						}
					},
					edit: {
						type: 'Select',
						props: {
							mode: 'multiple',
							options: [
								{
									label: 'test_a',
									value: 'scripts.rules.test_a'
								},
								{
									label: 'test_b',
									value: 'scripts.rules.test_b'
								},
								{
									label: 'test_c',
									value: 'scripts.rules.test_c'
								},
								{
									label: 'test_d',
									value: 'scripts.rules.test_d'
								}
							]
						}
					}
				},
				数据示例: {
					bind: 'value',
					view: {
						type: 'Text',
						props: {}
					}
				}
			}
		}
	}
}

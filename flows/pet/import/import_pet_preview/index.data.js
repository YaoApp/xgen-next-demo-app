function main() {
	return {
		primary: 'id',
		table: {
			props: {},
			columns: [
				{
					name: '名称'
				},
				{
					name: '类型'
				},
				{
					name: '入院状态'
				},
				{
					name: '状态'
				},
				{
					name: '入院时间'
				},
				{
					name: '花费'
				},
				{
					name: '是否有效'
				}
			],
			operation: {
				hide: true
			}
		},
		fileds: {
			table: {
				名称: {
					bind: 'name',
					view: {
						type: 'Text',
						props: {}
					}
				},
				类型: {
					bind: 'type',
					view: {
						type: 'Text',
						props: {}
					}
				},
				入院状态: {
					bind: 'status',
					view: {
						type: 'Text',
						props: {}
					}
				},
				状态: {
					bind: 'mode',
					view: {
						type: 'Text',
						props: {}
					}
				},
				入院时间: {
					bind: 'stay',
					view: {
						type: 'Text',
						props: {}
					}
				},
				花费: {
					bind: 'cost',
					view: {
						type: 'Text',
						props: {}
					}
				},
				是否有效: {
					bind: '__effected',
					view: {
						type: 'Checkbox',
						props: {
							text: '有效'
						}
					}
				}
			}
		}
	}
}

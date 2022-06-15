function index(columns, data) {
	var ignore = 0
	var failure = 0
	var last = columns.length - 1

	columns.pop()

	for (var i in data) {
		var row = data[i] || []

		if (!row[last]) {
			ignore++
			continue
		}

            row.pop()
            
            var res = Process('models.pet.Insert', columns, [row])
            
		if (res != null) {
			failure++
		}
      }
      
	return [failure, ignore]
}

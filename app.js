const wrongSudoku5 = [
	[7, 9, 8, 3, 6, 4, 2, 1, 5],
	[5, 4, 1, 9, 6, 2, 6, 8, 3],
	[2, 3, 6, 8, 1, 5, 7, 9, 4],
	[1, 2, 5, 6, 8, 3, 9, 4, 7],
	[4, 8, 3, 7, 9, 2, 5, 6, 1],
	[6, 7, 9, 5, 4, 1, 8, 3, 2],
	[9, 6, 2, 1, 3, 8, 4, 7, 9],
	[8, 1, 4, 2, 7, 9, 3, 5, 6],
	[3, 5, 7, 4, 6, 9, 1, 2, 8]
]

const correctSudoku = [
	[8, 3, 5, 4, 1, 6, 9, 2, 7],
	[2, 9, 6, 8, 5, 7, 4, 3, 1],
	[4, 1, 7, 2, 9, 3, 6, 5, 8],
	[5, 6, 9, 1, 3, 4, 7, 8, 2],
	[1, 2, 3, 6, 7, 8, 5, 4, 9],
	[7, 4, 8, 5, 2, 9, 1, 6, 3],
	[6, 5, 2, 7, 8, 1, 3, 9, 4],
	[9, 8, 1, 3, 4, 5, 2, 7, 6],
	[3, 7, 4, 9, 6, 2, 8, 1, 5]
]

const isArrayUnique = arr => {
	let uniqueArr = []

	for (let i = 0; i < arr.length; i++) {
		if (uniqueArr.includes(arr[i])) {
			return false
		} else {
			uniqueArr.push(arr[i])
		}
	}

	return true
}

const isSudokuCorrect = sudoku => {
	// Check if all the rows are made of unique arrays
	for (let i = 0; i < sudoku.length; i++) {
		if (!isArrayUnique(sudoku[i])) {
			return false
		}
	}

	// Check if all the columns are made of unique arrays
	let columnArray = []
	for (let j = 0; j < sudoku.length; j++) { // j is column
		columnArray = []
		for (let i = 0; i < sudoku.length; i++) // i is row
			if (columnArray.includes(sudoku[i][j])) {
				return false
			} else {
				columnArray.push(sudoku[i][j])
			}
	}

	// Check if all the squares are made of unique arrays
}

console.log(isSudokuCorrect(correctSudoku))
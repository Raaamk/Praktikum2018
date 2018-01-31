
const getNextCell = require('./get-next-cell')

describe('gof - board', () => {

  it('should die', () => {
    let fields = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]
    const cell = getNextCell(
      fields
    );
    expect(cell).toBe(0);
  });

  it('should alive - 2 neigbours', () => {
    let fields = [
      [1, 1, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]
    const cell = getNextCell(
      fields
    );
    expect(cell).toBe(1);
  });

  it('should born new cell', () => {
    let fields = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ]
    const cell = getNextCell(
      fields
    );
    expect(cell).toBe(1);
  });

  it('should die four other neighbours - overcrouded', () => {
    let fields = [
      [1, 0, 1],
      [1, 1, 0],
      [0, 0, 1],
    ]
    const cell = getNextCell(
      fields
    );
    expect(cell).toBe(1);
  });
setTimeout(getNextCell, 1000);
});

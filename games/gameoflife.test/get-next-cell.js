

function getNextCell(fields) {

    var count = 0;

    if (fields[0][0] == 1 || fields[0][1] == 1 || fields[0][2] == 1|| fields[1][0] == 1
        || fields[1][2] == 1 || fields[2][0] == 1|| fields[2][1]== 1 || fields[2][2]== 1) {
        fields.forEach(function () {
            count++;
        });
        if (fields[1][1] == 0) {
            fields[1][1] = 1;
           
        }
    }
    if (count == 2 || count == 3) {
        return 1;
    } else {
        return 0;
        fields[1][1] = 0;
      }


}



module.exports = getNextCell;


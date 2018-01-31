const getNextGeneration = require("./get-next-generation");

describe ("getNextGeneration", function(){
    
      it('should die', () => {
        let fields = [
          [0, 1, 1, 1],
          [1, 0, 0, 1],
          [0, 1, 0, 0],
          [0, 0, 0, 0],
        ]
        getNextGeneration(fields);
        let expectedFields = [
            [0, 1, 1, 1],
            [1, 0, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            ]
  
        expect(fields).toEqual(expectedFields);
      });
      
});
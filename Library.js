 function matrixCreator(n,fill){
    if(n < 0){return null;}

    let result = [];

    for(let i = 0; i < n; i++){
        let row = [];
        for(let j = 0; j < n; j++){
            
            row.push(fill);
        }
        result.push(row);
    }    
return result;

}


 function saveMatrixToFile(matrix, path){
    require('fs').writeFile(
      path,
         JSON.stringify(matrix),
     function (err) {
            if (err) {
                console.error('Crap happens');
            }
        }
    );
    }
    
    

    function loadMatrixFromFile(path){
        const fs = require('fs');
        let text = fs.readFileSync(path, 'utf-8');
        text = JSON.parse(text);
        return text;
        }

        function determineMatrixType(matrix){
            for(let i = 0; i < matrix.length; i++){
                if(matrix.length== matrix[i].length){
                    return "square matrix";
                }else{
                    return "rectangular matrix";
                }
            }
        }

        module.exports = {matrixCreator, saveMatrixToFile, loadMatrixFromFile, determineMatrixType}

    
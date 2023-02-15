let requestData= {
    "entities": [],
    "globalTransformers": [
        {
            "name": "norm",
            "order": "before"
        }
    ],
    "attributeTransformers": [
        {
            "attributeName": "birth_date",
            "transformers": [
                {
                    "name": "charFilter"
                }
            ]
        }
    ]
}
function processFile(){
    const fileToLoad = document.getElementById("formFile").files[0];
    const fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        const textFromFileLoaded = fileLoadedEvent.target.result;
        requestData.entities = csvToJSON(textFromFileLoaded);
        postDataToServer(requestData);
    };
    try {
        fileReader.readAsText(fileToLoad, "UTF-8");
    }catch (_error) {
        console.log('No/Wrong file', _error)
    }
}
function csvToJSON(csv) {
    const lines = csv.split("\n");
    let result = [];
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
        let obj = {};
        const words = lines[i].split(",");
        for(let j = 0; j < words.length; j++) {
            obj[headers[j].trim()] = words[j];
        }
        result.push(obj);
    }
    return result;
}
function postDataToServer(data) {
    fetch("http://localhost:8080", {
        method: "POST",
        body: JSON.stringify(data)
    }).then(res => {
        return res.json()
    }).then(resJson => {
        document.getElementById("results").value = JSON.stringify(resJson.entities);
    });
}
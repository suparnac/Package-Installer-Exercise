//function to print the package installation order
function printInstallerInfo(input1) {

    var hmap = new LinkedHashMap();     //using linkedhashmap for storing key value pairs
    var input = input1.split('\n');
    var key, value;
    var counter=0;
    try {
        for (var i = 0; i < input.length; i++) {
            key = input[i].substring(0, input[i].indexOf(":"));
            if (input[i].indexOf(":") === input[i].length - 2) {
                value = "0";
            } else {
                value = input[i].substring(input[i].indexOf(":") + 2);
            }
            hmap.ad(key, value);
        }
        var iter = new Iterator(hmap.keys());
        
        var sObj = new Array();

        while (iter.hasNext()) {

            key = iter.next();
            if (hmap.get(key) !== "1" && hmap.get(key) !== "0") {
                while (hmap.get(key) !== "1" && hmap.get(key) !== "0") {
                    if (hmap.get(key) === "-1") {
                        document.getElementById("para").innerHTML = "Invalid!!!";
                        return;
                    }
                    else {
                        sObj.push(key);
                        var temp = hmap.get(key);
                        hmap.ad(key, "-1");
                        key = temp;
                        if (!hmap.hs(key, null)) {
                            document.getElementById("para").innerHTML = "Invalid!!!";
                            return;
                        }
                    }
                }
            }
            var x = document.createElement("P");


            if (hmap.get(key) === "0") {
                var t = document.createTextNode(key);

                x.appendChild(t);
                counter++;
                
                if (counter<input.length) {
                    x.appendChild(document.createTextNode(","));
                }
                document.body.appendChild(x);

                
                hmap.ad(key, "1");
            }


            while (sObj.length !== 0) {
                key = sObj.pop();
                
                var t = document.createTextNode(key);

                x.appendChild(t);
                counter++;
                
                if (counter<input.length) {
                    x.appendChild(document.createTextNode(","));
                }
                document.body.appendChild(x);

                hmap.ad(key, "1");
            }

        }
    }
    catch (e) {
        document.getElementById("para").innerHTML = "Invalid! " + e;
    }
};

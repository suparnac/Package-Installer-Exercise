function printInstallerInfo(input) {
    
    var hmap = new LinkedHashMap();

    var key, value;
    try {
        for (var i = 0; i < input.length; i++) {
            
            key = input[i].substring(0, input[i].indexOf(":"));
            if (input[i].indexOf(":") === input[i].length() - 2) {
                value = "0";
                
            } else {
                value = input[i].substring(input[i].indexOf(":") + 2);
                
            }
            hmap.ad(key, value);
            
        }
        var iter = new Iterator(hmap.keys());

        // Iterator<String> itObj=hmapObj.keySet().iterator();
        var sObj = new Array();
alert(hmap.keys());
        while (iter.hasNext()) {
            key = iter.next();
            if (!hmap.get(key).equals("1") && !hmap.get(key).equals("0")) {
                while (!hmap.get(key).equals("1") && !hmap.get(key).equals("0")) {
                    if (hmap.get(key).equals("-1")) {
                        document.getElementById("para").innerHTML = "Invalid!!!";
                        return;
                    }
                    else {
                        sObj.push(key);

                        var temp = hmap.get(key);
                        hmap.put(key, "-1");
                        key = temp;
                    }
                }
            }
            if (hmap.get(key).equals("0")) {
                document.getElementById("para").innerHTML = key + " ";

                hmap.put(key, "1");
            }
            while (!sObj.empty()) {
                key = sObj.pop();
                document.getElementById("para").innerHTML = key + " ";
                hmap.put(key, "1");
            }

        }
    }
    catch (e) {
        document.getElementById("para").innerHTML = "Invalid!";
    }
}
;
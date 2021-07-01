class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

var head = new Node(1);

function insert(data, index) {
    var temp = head;
    if (index == 0) {
        head = new Node();
        head.data = data;
        head.next = temp;
    } else {
        var temp2 = new Node();
        temp2.data = data;

        for (var i = 0; i < (index - 1); i++) {
            if (temp.next != null) {
                temp = temp.next;
            } else {
                temp.next = temp2;
                return;
            }
        }

        temp2.next = temp.next;
        temp.next = temp2;
    }    
}

function del(index) {
    var temp = head;
    if (index == 0) {
        head = head.next;
    } else {
        for (var i = 0; i < (index - 1); i++) {
            if (temp.next != null) {
                temp = temp.next;
            } else {
                temp = null;
                return;
            }
        }

        var temp2 = temp.next;
        if (temp2 == null) {
            temp = null;
            return;
        }
        temp.next = temp2.next;
    }
}


function setValue(data, index) {
    var temp = head;

    for (var i = 0; i < index; i++) {
        if (temp.next != null) {
            temp = temp.next;
        } else {
            temp.data = data;
            return;
        }
    }

    temp.data = data;
}

function reverse() {
    var temp2 = head;
    var temp1 = null, temp3 = null;

    while (temp2 != null) {
        temp3 = temp2.next;
        temp2.next = temp1;
        temp1 = temp2;
        temp2 = temp3;
    }
    head = temp1;
}

function printLinkedList() {
    var r = "";
    var temp = head;

    while (temp != null) {
        r += (temp.data + "-·");
        temp = temp.next;
    }

    if (r == "") {
        document.getElementById("inputIndex").value = "0";
        r = "null";
    }

    document.getElementById("labelNormal").innerHTML = r;
}

window.onload = function () {
  window.insert("2", 0);
  window.printLinkedList();

  document.getElementById("insertButton").onclick = function()
  {
    window.insert(document.getElementById("inputData").value, parseInt(document.getElementById("inputIndex").value));
    window.printLinkedList();
  };

  document.getElementById("deleteButton").onclick = function()
  {
    window.del(parseInt(document.getElementById("inputIndex").value));
    window.printLinkedList();
  };

  document.getElementById("setButton").onclick = function()
  {
    window.setValue(document.getElementById("inputData").value, parseInt(document.getElementById("inputIndex").value));
    window.printLinkedList();
  };

  document.getElementById("reverseButton").onclick = function()
  {
    window.reverse(document.getElementById("inputData").value, parseInt(document.getElementById("inputIndex").value));
    window.printLinkedList();
  };
};

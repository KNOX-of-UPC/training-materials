window.onload = function () {
	function subInfo() {
		// 获得对象的属性值
		var name = document.getElementById("name").value;
		var select = document.getElementsByName("sex")[0];
		if (select.checked == true) {
			var i = 0;
		} else {
			i = 1;
		}
		var sex = document.getElementsByName("sex")[i].value;
		var year = document.getElementById("year").value;
		var month = document.getElementById("month").value;
		var city = document.getElementById("city").value;
		// 将提交的出生日期拼接成一个字符串
		var birth = year + "年" + month + "月";

		var tr = document.createElement("tr");
		tr.innerHTML = "<tr>"
			+ "<td class='l1'>" + name + "</td>"
			+ "<td class='l2'>" + sex + "</td>"
			+ "<td class='l3'>" + birth + "</td>"
			+ "<td class='l4'>" + city + "</td>"
			+ "</tr>";
		// 添加数据到表中
		document.getElementById("show-box").appendChild(tr);
	}

	var btn = document.getElementsByClassName("sub")[0];
	btn.addEventListener("click", subInfo);
}


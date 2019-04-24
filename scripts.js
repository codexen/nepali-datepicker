today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
currentMonth = 11;
currentYear = 2075;

months = ["Baishak", "Jestha", "Ashad", "Shrawn", "Bhadra", "Ashwin", "kartik", "Mangshir", "Poush", "Magh", "Falgun", "Chaitra"];
nepali_dates = {
	2000:[[30,32,31,32,31,30,30,30,29,30,29,31],[4,6,3,6,3,6,1,3,5,6,1,2]],
	2001:[[31,31,32,31,31,31,30,29,30,29,30,30],[5,1,4,1,4,7,3,5,6,1,2,4]],
	2002:[[31,31,32,32,31,30,30,29,30,29,30,30],[6,2,5,2,6,2,4,6,7,2,3,5]],
	2003:[[31,32,31,32,31,30,30,30,29,29,30,31],[7,3,7,3,7,3,5,7,2,3,4,6]],
	2004:[[30,32,31,32,31,30,30,30,29,30,29,31],[2,4,1,4,1,4,6,1,3,4,6,7]],
	2005:[[31,31,32,31,31,31,30,29,30,29,30,30],[3,6,2,6,2,5,1,3,4,6,7,2]],
	2006:[[31,31,32,32,31,30,30,29,30,29,30,30],[4,7,3,7,4,7,2,4,5,7,1,3]],
	2007:[[31,32,31,32,31,30,30,30,29,29,30,31],[5,1,5,1,5,1,3,5,7,1,2,4]],
	2008:[[31,31,31,32,31,31,29,30,30,29,29,31],[7,3,6,2,6,2,5,6,1,3,4,5]],
	2009:[[31,31,32,31,31,31,30,29,30,29,30,30],[1,4,7,4,7,3,6,1,2,4,5,7]],
	2010:[[31,31,32,32,31,30,30,29,30,29,30,30],[2,5,1,5,2,5,7,2,3,5,6,1]],
	2011:[[31,32,31,32,31,30,30,30,29,29,30,31],[3,6,3,6,3,6,1,3,5,6,7,2]],
	2012:[[31,31,31,32,31,31,29,30,30,29,30,30],[5,1,4,7,4,7,3,4,6,1,2,4]],
	2013:[[31,31,32,31,31,31,30,29,30,29,30,30],[6,2,5,2,5,1,4,6,7,2,3,5]],
	2014:[[31,31,32,32,31,30,30,29,30,29,30,30],[7,3,6,3,7,3,5,7,1,3,4,6]],
	2015:[[31,32,31,32,31,30,30,30,29,29,30,31],[1,4,1,4,1,4,6,1,3,4,5,7]],
	2016:[[31,31,31,32,31,31,29,30,30,29,30,30],[3,6,2,5,2,5,1,2,4,6,7,2]],
	2017:[[31,31,32,31,31,31,30,29,30,29,30,30],[4,7,3,7,3,6,2,4,5,7,1,3]],
	2018:[[31,32,31,32,31,30,30,29,30,29,30,30],[5,1,5,1,5,1,3,5,6,1,2,4]],
	2019:[[31,32,31,32,31,30,30,30,29,30,29,31],[6,2,6,2,6,2,4,6,1,2,4,5]],
	2020:[[31,31,31,32,31,31,30,29,30,29,30,30],[1,4,7,3,7,3,6,1,2,4,5,7]],
	2021:[[31,31,32,31,31,31,30,29,30,29,30,30],[2,5,1,5,1,4,7,2,3,5,6,1]],
	2022:[[31,32,31,32,31,30,30,30,29,29,30,30],[3,6,3,6,3,6,1,3,5,6,7,2]],
	2023:[[31,32,31,32,31,30,30,30,29,30,29,31],[4,7,4,7,4,7,2,4,6,7,2,3]],
	2024:[[31,31,31,32,31,31,30,29,30,29,30,30],[6,2,5,1,5,1,4,6,7,2,3,5]],
	2025:[[31,31,32,31,31,31,30,29,30,29,30,30],[7,3,6,3,6,2,5,7,1,3,4,6]],
	2026:[[31,32,31,32,31,30,30,30,29,29,30,31],[1,4,1,4,1,4,6,1,3,4,5,7]],
	2027:[[30,32,31,32,31,30,30,30,29,30,29,31],[3,5,2,5,2,5,7,2,4,5,7,1]],
	2028:[[31,31,32,31,31,31,30,29,30,29,30,30],[4,7,3,7,3,6,2,4,5,7,1,3]],
	2029:[[31,31,32,31,32,30,30,29,30,29,30,30],[5,1,4,1,4,1,3,5,6,1,2,4]],
	2030:[[31,32,31,32,31,30,30,30,29,29,30,31],[6,2,6,2,6,2,4,6,1,2,3,5]],
	2031:[[30,32,31,32,31,30,30,30,29,30,29,31],[1,3,7,3,7,3,5,7,2,3,5,6]],
	2032:[[31,31,32,31,31,31,30,29,30,29,30,30],[2,5,1,5,1,4,7,2,3,5,6,1]],
	2033:[[31,31,32,32,31,30,30,29,30,29,30,30],[3,6,2,6,3,6,1,3,4,6,7,2]],
	2034:[[31,32,31,32,31,30,30,30,29,29,30,31],[4,7,4,7,4,7,2,4,6,7,1,3]], 
	2035:[[30,32,31,32,31,31,29,30,30,29,29,31],[6,1,5,1,5,1,4,5,7,2,3,4]],
	2036:[[31,31,32,31,31,31,30,29,30,29,30,30],[7,3,6,3,6,2,5,7,1,3,4,6]],
	2037:[[31,31,32,32,31,30,30,29,30,29,30,30],[1,4,7,4,1,4,6,1,2,4,5,7]],
	2038:[[31,32,31,32,31,30,30,30,29,29,30,31],[2,5,2,5,2,5,7,2,4,5,6,1]],
	2039:[[31,31,31,32,31,31,29,30,30,29,30,30],[4,7,3,6,3,6,2,3,5,7,1,3]],
	2040:[[31,31,32,31,31,31,30,29,30,29,30,30],[5,1,4,1,4,7,3,5,6,1,2,4]],
	2041:[[31,31,32,32,31,30,30,29,30,29,30,30],[6,2,5,2,6,2,4,6,7,2,3,5]],
	2042:[[31,32,31,32,31,30,30,30,29,29,30,31],[7,3,7,3,7,3,5,7,2,3,4,6]],
	2043:[[31,31,31,32,31,31,29,30,30,29,30,30],[2,5,1,4,1,4,7,1,3,5,6,1]],
	2044:[[31,31,32,31,31,31,30,29,30,29,30,30],[3,6,2,6,2,5,1,3,4,6,7,2]],
	2045:[[31,32,31,32,31,30,30,29,30,29,30,30],[4,7,4,7,4,7,2,4,5,7,1,3]],
	2046:[[31,32,31,32,31,30,30,30,29,29,30,31],[5,1,5,1,5,1,3,5,7,1,2,4]],
	2047:[[31,31,31,32,31,31,30,29,30,29,30,30],[7,3,6,2,6,2,5,7,1,3,4,6]],
	2048:[[31,31,32,31,31,31,30,29,30,29,30,30],[1,4,7,4,7,3,6,1,2,4,5,7]],
	2049:[[31,32,31,32,31,30,30,30,29,29,30,30],[2,5,2,5,2,5,7,2,4,5,6,1]],
	2050:[[31,32,31,32,31,30,30,30,29,30,29,31],[3,6,3,6,3,6,1,3,5,6,1,2]],
	2051:[[31,31,31,32,31,31,30,29,30,29,30,30],[5,1,4,7,4,7,3,5,6,1,2,4]],
	2052:[[31,31,32,31,31,31,30,29,30,29,30,30],[6,2,5,2,5,1,4,6,7,2,3,5]],
	2053:[[31,32,31,32,31,30,30,30,29,29,30,30],[7,3,7,3,7,3,5,7,2,3,4,6]],
	2054:[[31,32,31,32,31,30,30,30,29,30,29,31],[1,4,1,4,1,4,6,1,3,4,6,7]],
	2055:[[31,31,32,31,31,31,30,29,30,29,30,30],[3,6,2,6,2,5,1,3,4,6,7,2]],
	2056:[[31,31,32,31,32,30,30,29,30,29,30,30],[4,7,3,7,3,7,2,4,5,7,1,3]],
	2057:[[31,32,31,32,31,30,30,30,29,29,30,31],[5,1,5,1,5,1,3,5,7,1,2,4]],
	2058:[[30,32,31,32,31,30,30,30,29,30,29,31],[7,2,6,2,6,2,4,6,1,2,4,5]],
	2059:[[31,31,32,31,31,31,30,29,30,29,30,30],[1,4,7,4,7,3,6,1,2,4,5,7]],
	2060:[[31,31,32,32,31,30,30,29,30,29,30,30],[2,5,1,5,2,5,7,2,3,5,6,1]],
	2061:[[31,32,31,32,31,30,30,30,29,29,30,31],[3,6,3,6,3,6,1,3,5,6,7,2]],
	2062:[[30,32,31,32,31,31,29,30,29,30,29,31],[5,7,4,7,4,7,3,4,6,7,2,3]],
	2063:[[31,31,32,31,31,31,30,29,30,29,30,30],[6,2,5,2,5,1,4,6,7,2,3,5]],
	2064:[[31,31,32,32,31,30,30,29,30,29,30,30],[7,3,6,3,7,3,5,7,1,3,4,6]],
	2065:[[31,32,31,32,31,30,30,30,29,29,30,31],[1,4,1,4,1,4,6,1,3,4,5,7]],
	2066:[[31,31,31,32,31,31,29,30,30,29,29,31],[3,6,2,5,2,5,1,2,4,6,7,1]],
	2067:[[31,31,32,31,31,31,30,29,30,29,30,30],[4,7,3,7,3,6,2,4,5,7,1,3]],
	2068:[[31,31,32,32,31,30,30,29,30,29,30,30],[5,1,4,1,5,1,3,5,6,1,2,4]],
	2069:[[31,32,31,32,31,30,30,30,29,29,30,31],[6,2,6,2,6,2,4,6,1,2,3,5]],
	2070:[[31,31,31,32,31,31,29,30,30,29,30,30],[1,4,7,3,7,3,6,7,2,4,5,7]],
	2071:[[31,31,32,31,31,31,30,29,30,29,30,30],[2,5,1,5,1,4,7,2,3,5,6,1]],
	2072:[[31,32,31,32,31,30,30,29,30,29,30,30],[3,6,3,6,3,6,1,3,4,6,7,2]],
	2073:[[31,32,31,32,31,30,30,30,29,29,30,31],[4,7,4,7,4,7,2,4,6,7,1,3]],
	2074:[[31,31,31,32,31,31,30,29,30,29,30,30],[6,2,5,1,5,1,4,6,7,2,3,5]],
	2075:[[31,31,32,31,31,31,30,29,30,29,30,30],[7,3,6,3,6,2,5,7,1,3,4,6]],
	2076:[[31,32,31,32,31,30,30,30,29,29,30,30],[1,4,1,4,1,4,6,1,3,4,5,7]],
	2077:[[31,32,31,32,31,30,30,30,29,30,29,31],[2,5,2,5,2,5,7,2,4,5,7,1]],
	2078:[[31,31,31,32,31,31,30,29,30,29,30,30],[4,7,3,6,3,6,2,4,5,7,1,3]],
	2079:[[31,31,32,31,31,31,30,29,30,29,30,30],[5,1,4,1,4,7,3,5,6,1,2,4]],
	2080:[[31,32,31,32,31,30,30,30,29,29,30,30],[6,2,6,2,6,2,4,6,1,2,3,5]],
	2081:[[31,31,32,32,31,30,30,30,29,30,30,30],[7,3,6,3,7,3,5,7,2,3,5,7]],
	2082:[[30,32,31,32,31,30,30,30,29,30,30,30],[2,4,1,4,1,4,6,1,3,4,6,1]],
	2083:[[31,31,32,31,31,30,30,30,29,30,30,30],[3,6,2,6,2,5,7,2,4,5,7,2]],
	2084:[[31,31,32,31,31,30,30,30,29,30,30,30],[4,7,3,7,3,6,1,3,5,6,1,3]],
	2085:[[31,32,31,32,30,31,30,30,29,30,30,30],[5,1,5,1,5,7,3,5,7,1,3,5]],
	2086:[[30,32,31,32,31,30,30,30,29,30,30,30],[7,2,6,2,6,2,4,6,1,2,4,6]],
	2087:[[31,31,32,31,31,31,30,30,29,30,30,30],[1,4,7,4,7,3,6,1,3,4,6,1]],
	2088:[[30,31,32,32,30,31,30,30,29,30,30,30],[3,5,1,5,2,4,7,2,4,5,7,2]],
	2089:[[30,32,31,32,31,30,30,30,29,30,30,30],[4,6,3,6,3,6,1,3,5,6,1,3]],
	2090:[[30,32,31,32,31,30,30,30,29,30,30,30],[5,7,4,7,4,7,2,4,6,7,2,4]],
};

function next() {
	currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	showCalendar(currentMonth, currentYear);
}

function previous() {
	currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
	currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
	showCalendar(currentMonth, currentYear);
}

function jump() {
	currentYear = parseInt(selectYear.value);
	currentMonth = parseInt(selectMonth.value);
	showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    // let firstDay = (new Date(year, month)).getDay();
    let firstDay = nepali_dates[year][1][month] - 1;

    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
        	if (i === 0 && j < firstDay) {
        		cell = document.createElement("td");
        		cellText = document.createTextNode("");
        		cell.appendChild(cellText);
        		row.appendChild(cell);
        	}
        	else if (date > daysInMonth(month, year)) {
        		break;
        	}

        	else {
        		cell = document.createElement("td");
        		if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
        			cell.classList.add("bg-info");
                } // color today's date
                cell.classList.add("xen-cell");
                var nepaliDate = unicodeText(date);
                cellText = document.createTextNode(nepaliDate);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }
}

function daysInMonth(iMonth, iYear) {
	return nepali_dates[iYear][0][iMonth];
}

function unicodeText(text) {
	var chars = {'0':'०','1':'१','2':'२','3':'३','4':'४','5':'५','6':'६','7':'७','8':'८','9':'९'};
	return text.toString().replace(/[0123456789]/g, m => chars[m]);
}

function englishText(text) {
	var chars = {'०':'0','१':'1','२':'2','३':'3','४':'4','५':'5','६':'6','७':'7','८':'8','९':'9'};
	return text.toString().replace(/[०१२३४५६७८९]/g, m => chars[m]);
}

document.onclick = function(e){
	e=window.event? event.srcElement: e.target;
	if(e.className && e.className.indexOf('xen-cell')!=-1){
		var elems = document.querySelectorAll(".xen-cell");
		[].forEach.call(elems, function(el) {
			el.classList.remove("xen-bg-info");
		});

		e.classList.add("xen-bg-info");
		var currentDate = englishText(e.innerHTML);
		currentDate = ('0' + currentDate).slice(-2);
		var showMonth = currentMonth + 1;
		showMonth = ('0' + showMonth).slice(-2);
		document.querySelector(".xen-datepicker").value = currentDate +'/'+ showMonth +'/'+ currentYear;
		document.querySelector(".xen-card").style.display = "none";
	}
}

let calendars = [];

function init($class) {
	let input = document.querySelector($class);
	input.outerHTML += '<div class="xen-card"><div class="xen-card-header"><div class="xen-form-wrapper"><form class="xen-form-inline"><select class="" name="month" id="month" onchange="jump()"><option value=0>बैशाख</option><option value=1>जेठ</option><option value=2>असार</option><option value=3>श्रावण</option><option value=4>भदौ</option><option value=5>आश्विन</option><option value=6>कार्तिक</option><option value=7>मंसिर</option><option value=8>पुष</option><option value=9>माघ</option><option value=10>फाल्गुन</option><option value=11>चैत्र</option></select><label for="year"></label><select class="col-sm-6" name="year" id="year" onchange="jump()"><option value=2000>2000</option><option value=2001>2001</option><option value=2002>2002</option><option value=2003>2003</option><option value=2004>2004</option><option value=2005>2005</option><option value=2006>2006</option><option value=2007>2007</option><option value=2008>2008</option><option value=2009>2009</option><option value=2010>2010</option><option value=2011>2011</option><option value=2012>2012</option><option value=2013>2013</option><option value=2014>2014</option><option value=2015>2015</option><option value=2016>2016</option><option value=2017>2017</option><option value=2018>2018</option><option value=2019>2019</option><option value=2020>2020</option><option value=2021>2021</option><option value=2022>2022</option><option value=2023>2023</option><option value=2024>2024</option><option value=2025>2025</option><option value=2026>2026</option><option value=2027>2027</option><option value=2028>2028</option><option value=2029>2029</option><option value=2030>2030</option><option value=2075>2075</option><option value=2076>2076</option><option value=2077>2077</option></select></form><div class="xen-prev-next-btn"><button class="xen-btn-prev" id="previous" onclick="previous()">Prev</button><button class="xen-btn" id="next" onclick="next()">Next</button></div></div></div><table border="1" class="xen-calendar-table" id="calendar"><thead><tr><th>आइत</th><th>सोम</th><th>मङ्गल</th><th>बुध</th><th>बिहि</th><th>शुक्र</th><th>शनि</th></tr></thead><tbody id="calendar-body"></tbody></table></div>';
	selectYear = document.getElementById("year");
	selectMonth = document.getElementById("month");
	calendars.push(input);
	showCalendar(currentMonth, currentYear);
	visibleCalendar($class);
	invisibleCalendar($class);
	console.log(calendars);
}


function visibleCalendar($class) {
	$class = $class.substr(1);
	document.body.onclick = function(e){
		e=window.event? event.srcElement: e.target;
		if(e.className && e.className.indexOf($class)!=-1){
			e.nextSibling.style.display = "block";
		} else if (e.classname && e.className.indexOf('xen-cell') != -1) {

		}
	}
}

function invisibleCalendar($class) {
	document.addEventListener('click', function(event) {
		var noRedirect = $class;
		noRedirect += ', .xen-card, .xen-card *';
		if (!event.target.matches(noRedirect)) {
			document.querySelector('.xen-card').style.display = 'none';
		}
	});
};
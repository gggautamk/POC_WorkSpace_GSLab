var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["SUN"] = 100] = "SUN";
    DayOfWeek[DayOfWeek["MON"] = 101] = "MON";
    DayOfWeek[DayOfWeek["WED"] = 102] = "WED";
    DayOfWeek[DayOfWeek["THU"] = 103] = "THU";
    DayOfWeek[DayOfWeek["FRI"] = 104] = "FRI";
    DayOfWeek[DayOfWeek["SAT"] = 105] = "SAT";
})(DayOfWeek || (DayOfWeek = {}));
var day;
day = DayOfWeek.THU;
if (day === DayOfWeek.THU) {
    console.log("Monday");
}

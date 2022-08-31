/**
 * Bài 1:Quản lý tuyển sinh
 * function check(d){return(d>=0)}
 * btnKQ
 * - input:
 * + diemChuan
 * + khuvuc: KV
 * + doituong: DT
 * + diem mon thu1:d1
 * + diem mon thu2:d2
 * + diem mon thu3:d3
 * + var ketQua ="";
 * 
 * - progress:
 * 
 * + tongDiem = d1+d2+d3+(KV+DT);
 * if(tongDiem >= diemChuan && check(d1) && check(d2) &&check(d3) ){
 * ketQua += "Bạn đã đâu.Tổng điểm bằng: "+tongDiem;
 * }else if(tongDiem < diemChuan && check(d1) && check(d2) &&check(d3)){
 * ketQua += "Bạn đã rớt.Tổng điểm bằng: "+tongDiem;
 * }else{
 * ketQua +="Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
 * };
 * 
 * - Output:
 * inner ra man hinh = ketQua;
 * }
 */

var btnKQ = document.getElementById("btnKQ");
btnKQ.onclick = function(){
// input: 
var diemChuan = document.getElementById("diemChuan").value*1;
var KV = document.getElementById("KV").value*1;
var DT = document.getElementById("DT").value*1;
var d1 = document.getElementById("d1").value*1;
var d2 = document.getElementById("d2").value*1;
var d3 = document.getElementById("d3").value*1;
var KetQua = "";

//progress:
var tongDiem = d1+d2+d3+(KV+DT);
if(tongDiem >= diemChuan && d1>0 && d2>0 && d3>0){
    KetQua += "Bạn đã đậu.Tổng điểm bằng: "+tongDiem;
}else if(tongDiem < diemChuan && d1>0 && d2>0 && d3>0){
    KetQua += "Bạn đã rớt.Tổng điểm bằng: "+tongDiem;
}else if(tongDiem > diemChuan && d1==0 && d2==0 && d3==0){
    KetQua +="Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
}else{KetQua = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"};
document.getElementById("showInfoKQ").innerHTML = KetQua;
};


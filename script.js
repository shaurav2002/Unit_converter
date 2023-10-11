function a2meter(x2a) {
	return x2a;
}
function b2meter(x2a) {
	return  x2a*1000;
}
function c2meter(x2a) {
	return  x2a*0.01;
}
function d2meter(x2a) {
	return  x2a*0.001;
}
function e2meter(x2a) {
	return  x2a*0.000001;
}
function f2meter(x2a) {
	return  x2a*0.000000001;
}
function g2meter(x2a) {
	return  x2a*1609.35;
}
function h2meter(x2a) {
	return  x2a*0.9144;
}
function i2meter(x2a) {
	return  x2a*0.3048;
}
function j2meter(x2a) {
	return  x2a*0.0254;
}
function k2meter(x2a) {
	return  x2a*9460660000000000;
}

function meter2a(a2x) {
	return a2x;
}
function meter2b(a2x) {
	return a2x*0.001;
}
function meter2c(a2x) {
	return a2x*100;
}
function meter2d(a2x) {
	return a2x*1000;
}
function meter2e(a2x) {
	return a2x*1000000;
}
function meter2f(a2x) {
	return a2x*1000000000;
}
function meter2g(a2x) {
	return a2x*0.0006213689;
}
function meter2h(a2x) {
	return a2x*1.0936132983;
}
function meter2i(a2x) {
	return a2x*3.280839895;
}
function meter2j(a2x) {
	return a2x*39.37007874;
}
function meter2k(a2x) {
	return a2x*(1.057008707E-16);
}


let clkFromId = "meter";
let clkToId = "opkilometer";
let inp = document.getElementsByClassName("from-inp")[0].value;  
let resultToDisp = 0;

function convert2meter(inputVal,fromId){
	let x2aRes;
	if(fromId === "meter"){
		x2aRes = a2meter(inputVal);
	}
	else if(fromId === "kilometer"){
		x2aRes = b2meter(inputVal);
	}
	else if(fromId === "centimeter"){
		x2aRes = c2meter(inputVal);
	}
	else if(fromId === "millimeter"){
		x2aRes = d2meter(inputVal);
	}
	else if(fromId === "micrometer"){
		x2aRes = e2meter(inputVal);
	}
	else if(fromId === "nanometer"){
		x2aRes = f2meter(inputVal);
	}
	else if(fromId === "mile"){
		x2aRes = g2meter(inputVal);
	}
	else if(fromId === "yard"){
		x2aRes = h2meter(inputVal);
	}
	else if(fromId === "foot"){
		x2aRes = i2meter(inputVal);
	}
	else if(fromId === "inch"){
		x2aRes = j2meter(inputVal);
	}
	else if(fromId === "lightyear"){
		x2aRes = k2meter(inputVal);
	}
	return x2aRes;
}

function convertFromMeter(inputVal, toId){
	let a2xRes = 0;
	if(toId === "opmeter"){
		a2xRes = meter2a(inputVal);
	}
	else if(toId === "opkilometer"){
		a2xRes = meter2b(inputVal);
	}
	else if(toId === "opcentimeter"){
		a2xRes = meter2c(inputVal);
	}
	else if(toId === "opmillimeter"){
		a2xRes = meter2d(inputVal);
	}
	else if(toId === "opmicrometer"){
		a2xRes = meter2e(inputVal);
	}
	else if(toId === "opnanometer"){
		a2xRes = meter2f(inputVal);
	}
	else if(toId === "opmile"){
		a2xRes = meter2g(inputVal);
	}
	else if(toId === "opyard"){
		a2xRes = meter2h(inputVal);
	}
	else if(toId === "opfoot"){
		a2xRes = meter2i(inputVal);
	}
	else if(toId === "opinch"){
		a2xRes = meter2j(inputVal);
	}
	else if(toId === "oplightyear"){
		a2xRes = meter2k(inputVal);
	}
	return a2xRes;
}

function convert2all(inM){
	let a = document.getElementById("opmeter");
	let b = document.getElementById("opkilometer");
	let c = document.getElementById("opcentimeter");
	let d = document.getElementById("opmillimeter");
	let e = document.getElementById("opmicrometer");
	let f = document.getElementById("opnanometer");
	let g = document.getElementById("opmile");
	let h = document.getElementById("opyard");
	let i = document.getElementById("opfoot");
	let j = document.getElementById("opinch");
	let k = document.getElementById("oplightyear");

	let ares = "";
	let bres = "";
	let cres = "";
	let dres = "";
	let eres = "";
	let fres = "";
	let gres = "";
	let hres = "";
	let ires = "";
	let jres = "";
	let kres = "";

	if(inM !== ""){
		ares = "( " + meter2a(inM) + " )";
		bres = "( " + meter2b(inM) + " )";
		cres = "( " + meter2c(inM) + " )";
		dres = "( " + meter2d(inM) + " )";
		eres = "( " + meter2e(inM) + " )";
		fres = "( " + meter2f(inM) + " )";
		gres = "( " + meter2g(inM) + " )";
		hres = "( " + meter2h(inM) + " )";
		ires = "( " + meter2i(inM) + " )";
		jres = "( " + meter2j(inM) + " )";
		kres = "( " + meter2k(inM) + " )";

		a.innerHTML = "Meter" + ares;
		b.innerHTML = "Kilometer" + bres;
		c.innerHTML = "Centimeter" + cres;
		d.innerHTML = "Millimeter" + dres;
		e.innerHTML = "Micrometer" + eres;
		f.innerHTML = "Nanometer" + fres;
		g.innerHTML = "Mile" + gres;
		h.innerHTML = "Yard" + hres;
		i.innerHTML = "Foot" + ires;
		j.innerHTML = "inch" + jres;
		k.innerHTML = "Light Year" + kres;
	}
	else{
		a.innerHTML = "Meter" + ares;
		b.innerHTML = "Kilometer" + bres;
		c.innerHTML = "Centimeter" + cres;
		d.innerHTML = "Millimeter" + dres;
		e.innerHTML = "Micrometer" + eres;
		f.innerHTML = "Nanometer" + fres;
		g.innerHTML = "Mile" + gres;
		h.innerHTML = "Yard" + hres;
		i.innerHTML = "Foot" + ires;
		j.innerHTML = "inch" + jres;
		k.innerHTML = "Light Year" + kres;
	}
}

function x2meter_meter2y(){
	resInMeter = convert2meter(inp, clkFromId);
	let finalRes = convertFromMeter(resInMeter,clkToId);
	return finalRes;
}


function disp(tempToId){
	inp = document.getElementsByClassName("from-inp")[0].value;
	clkToId = tempToId;
	if(inp !== ""){
		resultToDisp = x2meter_meter2y();
		outputRes.setAttribute("placeholder",resultToDisp);
	}
	else{
		outputRes.setAttribute("placeholder"," ");	
	}
	printRes();
}

// Main Operation
function convert(tempFromId){
	clkFromId = tempFromId;
	let inMeter = "";
	inp = document.getElementsByClassName("from-inp")[0].value;  
	if(inp !== ""){
		inMeter = convert2meter(inp, tempFromId);	
	}
	convert2all(inMeter);
	disp(clkToId);
}


function calculate(){
	convert(clkFromId);
}

function printRes(){
	inp = document.getElementsByClassName("from-inp")[0].value;  
	let resFeild = document.getElementById("resBar"); 
	let res = ""; 
	if(inp !== ""){
		let fromName = document.getElementById(clkFromId).getAttribute("name");
		let toName = document.getElementById(clkToId).getAttribute("name");
		res = "Result :- " + inp + " " + fromName + " = " + resultToDisp + " " + toName;
		resFeild.innerHTML = res;
	}
	else{
		resFeild.innerHTML = res;
	}
}
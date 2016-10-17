(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var SunCalc = require('suncalc')


//Coordenadas granada
var lat = 37.1886273
var lon = -3.5907775

//Día que se quiere calcular
var dia = new Date();

//Calcular tiempos solares para el día
var positions = SunCalc.getPosition(dia, lat, lon)

var haltitude = positions.altitude



if(haltitude>0) var day = "día"
else day = "noche"}]})

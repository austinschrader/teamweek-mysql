import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $("#aboutUser").click(function (event) {
    event.preventDefault();
    console.log("hello world")
    let gender = $("input:radio:checked").val();
  });
});
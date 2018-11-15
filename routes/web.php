<?php

Route::resource('projects', 'ProjectController');
Route::get('projects-list', function(){
  return view('projects-list');
});


Route::get('datatable', function(){
  return view('datatable-sample');
});

Route::get('/samples', function () {
  return view('welcome2');
});

// Route::get('/user-list', function(){
//   return view('user-list');
// }); 
 

Route::get('/', function () {
    return view('welcome2');
});

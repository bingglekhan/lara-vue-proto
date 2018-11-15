<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
  protected $model = User ;

  public function index()
  {
      return $mode::all();
  }

  public function show($id)
  {
      return $mode::findOrFail($id);
  }

  public function update(Request $request, $id)
  {
      $company = $mode::findOrFail($id);
      $company->update($request->all());

      return $company;
  }

  public function store(Request $request)
  {
      $company = $mode::create($request->all());
      return $company;
  }

  public function destroy($id)
  {
      $company = $mode::findOrFail($id);
      $company->delete();
      return '';
  } 
}

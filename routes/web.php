<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PanelControl\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/',[AuthController::class,'login'])->name('login');
Route::post('/LoginProcess',[AuthController::class,'login_process'])->name('login_process');

Route::prefix('Controlpanel')->middleware('CheckLogin:super_admin')->group(function(){
    Route::get('/SuperAdmin/Dashboard',[DashboardController::class,'Dashboard_SuperAdmin'])->name('Dashboard_SuperAdmin');
});

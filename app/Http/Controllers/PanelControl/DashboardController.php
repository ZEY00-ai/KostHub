<?php

namespace App\Http\Controllers\PanelControl;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function Dashboard_SuperAdmin()
    {
        return Inertia::render('SuperAdmin/Dashboard');
    }
}

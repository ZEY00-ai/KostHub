<?php

namespace App\services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AuthService
{
    public function register($data)
    {
        $user = User::create([
            'name'=> $data['name'],
            'email'=> $data['email'],
            'password'=> Hash::make($data['password']),
            'role'=> $data['role'],
            'no_hp'=> $data['no_hp'],
        ]);
        if ($user) 
        {
            return true;   
        }
        return false;
    }

    public function login($data)
    {
        if (Auth::attempt([
            'email' => $data['email'],
            'password' => $data['password'],
            'role' => $data['role'],
        ])) {
            Session::put('logged_in', true);
            return true;
        }

        return false;
    }
}
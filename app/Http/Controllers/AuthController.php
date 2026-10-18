<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\services\AuthService;
use Exception;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AuthController extends Controller
{
    protected $AuthService;

    public function __construct(AuthService $authService)
    {
        $this->AuthService = $authService;
    }

    public function login()
    {
        return Inertia::render('authentication/auth/LoginPage');
    }

    public function login_process(Request $request)
    {
        $validated = $request->validate([
            'email' => ['required', 'email', 'exists:users,email'],
            'password' => ['required', 'string'],
        ], [
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Email tidak valid.',
            'email.exists' => 'Email tidak terdaftar.',
            'password.required' => 'Password wajib diisi.',
        ]);

        try {
            $validated['role'] = 'super_admin';
            $response = $this->AuthService->login($validated);

            if (!$response) {
                return redirect()->back()
                    ->withErrors(['email' => 'Email atau password tidak valid.'])
                    ->onlyInput('email');
            }
            $request->session()->regenerate();

            return redirect('Controlpanel/SuperAdmin/Dashboard')->with('success', 'Login berhasil.');
        } catch (Exception $e) {
            Log::error('Error during login: ' . $e->getMessage(), [
                'line' => $e->getLine(),
                'file' => $e->getFile(),
                'message' => $e->getMessage(),
            ]);

            return redirect()->back()
                ->withErrors(['email' => 'Terjadi kesalahan saat login.'])
                ->onlyInput('email');
        }
    }
}

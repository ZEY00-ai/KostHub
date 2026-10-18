<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;


class CheckLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next ,string $role): Response
    {
        if (!session('logged_in'))
        {
            Log::info('user not logged in - redirecting');
            return redirect()->route('login')->with('error','anda harus login terlebih dahulu');
        }
        
        if (!$request->user() || $request->user()->role !== $role)
        {
            abort(403,'anda tidak memiliki hak akses ke halaman ini.');
        }
        return $next($request);
    }
}

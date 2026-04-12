<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('Welcome', [
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
]));

Route::get('/login', fn() => Inertia::render('Login'))->name('login');
Route::post('/login', [AuthController::class, 'Login']);

Route::get('/dashboard', fn() => Inertia::render('admin/dashboard'))->name('dashboard');
Route::get('/products', fn() => Inertia::render('admin/products'))->name('products');
Route::post('/logout', [AuthController::class, 'Logout']);

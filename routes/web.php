<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

Route::get('/', fn() => Inertia::render('Welcome', [
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
]));

Route::get('/login', fn() => Inertia::render('Login'))->name('login');
Route::post('/login', [AuthController::class, 'Login']);

Route::get('/admin/dashboard', fn() => Inertia::render('admin/dashboard'))->name('dashboard');
Route::get('/admin/products', [ProductController::class, 'index'])->name('products');
Route::post('/admin/products', [ProductController::class, 'store'])->name('products.store');
Route::get('/admin/orders', fn() => Inertia::render('admin/orders'))->name('orders');
Route::get('/admin/transaction', fn() => Inertia::render('admin/transaction'))->name('transaction');
Route::post('/logout', [AuthController::class, 'Logout']);

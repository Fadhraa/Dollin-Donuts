<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\LandingController;

Route::get('/', [LandingController::class, 'index'])->name('landing');

Route::get('/login', fn() => Inertia::render('Login'))->name('login');
Route::post('/login', [AuthController::class, 'Login']);
Route::middleware(['auth'])->group(function () {
    Route::get('/admin/dashboard', fn() => Inertia::render('admin/dashboard'))->name('dashboard');
    // Product
    Route::get('/admin/products', [ProductController::class, 'index'])->name('products');
    Route::post('/admin/products', [ProductController::class, 'store'])->name('products.store');
    Route::put('/admin/products/{id}', [ProductController::class, 'update'])->name('products.update');
    Route::delete('/admin/products/{id}', [ProductController::class, 'destroy'])->name('products.destroy');
    // Orders
    Route::get('/admin/orders', fn() => Inertia::render('admin/orders'))->name('orders');
    Route::get('/admin/transaction', fn() => Inertia::render('admin/transaction'))->name('transaction');
    Route::post('/logout', [AuthController::class, 'Logout']);
});

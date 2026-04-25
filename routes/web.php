<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\DashboardController;

Route::get('/', [LandingController::class, 'index'])->name('landing');
Route::post('/order/submit', [OrderController::class, 'store'])->name('order.submit');

Route::get('/login', fn() => Inertia::render('Login'))->name('login');
Route::post('/login', [AuthController::class, 'Login']);

Route::middleware(['auth'])->group(function () {
    Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    // Product
    Route::get('/admin/products', [ProductController::class, 'index'])->name('products');
    Route::post('/admin/products', [ProductController::class, 'store'])->name('products.store');
    Route::put('/admin/products/{id}', [ProductController::class, 'update'])->name('products.update');
    Route::delete('/admin/products/{id}', [ProductController::class, 'destroy'])->name('products.destroy');
    // Orders
    Route::get('/admin/orders', fn() => Inertia::render('admin/orders'))->name('orders');
    Route::get('/admin/transaction', fn() => Inertia::render('admin/transaction'))->name('transaction');
    Route::get('/admin/ordermanagement', fn() => Inertia::render('admin/ordermanagement'))->name('ordermanagement');
    Route::post('/logout', [AuthController::class, 'Logout']);
});

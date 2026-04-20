<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function index()
    {
        $product = Product::with('packageItems')->where('is_active', true)->orderBy('created_at', 'desc')->get();
        return Inertia::render('Main', [
            'products' => $product,
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        // Lempar data produk bertipe satuan ke form modal React jika admin memilih paket
        $satuanProducts = Product::where('tipe', 'satuan')->get();
        return inertia('admin/products', [
            'satuanProducts' => $satuanProducts
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'harga' => 'required|numeric|min:0',
            'stok' => 'required|numeric|min:0',
            'deskripsi' => 'nullable|string',
            'is_active' => 'boolean',
            'is_favorite' => 'boolean',
            'is_new' => 'boolean',
            'tipe' => 'required|in:satuan,paket',
            'kategori' => 'required|in:donuts,mochi,pastry,beverage',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120',

            // Validasi khusus untuk paket
            'jumlah_pilihan' => 'nullable|required_if:tipe,paket|numeric|min:1',
            'package_items' => 'nullable|array',
            'package_items.*' => 'exists:products,id',
        ]);

        $linkGambar = null;
        if ($request->hasFile('gambar')) {
            // Kita pindah pakai fitur simpan awan (Cloud Storage) bawaan Laravel
            $path = $request->file('gambar')->store('dollin_donuts', 'cloudinary');

            /** @var \Illuminate\Filesystem\FilesystemAdapter $disk */
            $disk = Storage::disk('cloudinary');
            $linkGambar = collect(explode('?', $disk->url($path)))->first(); // Membersihkan URL jika ada ?v=...
        }

        $product = Product::create([
            'nama' => $validated['nama'],
            'harga' => $validated['harga'],
            'stok' => $validated['stok'],
            'deskripsi' => $validated['deskripsi'] ?? null,
            'is_active' => $validated['is_active'] ?? true,
            'is_favorite' => $validated['is_favorite'] ?? false,
            'is_new' => $validated['is_new'] ?? false,
            'tipe' => $validated['tipe'],
            'kategori' => $validated['kategori'],
            'jumlah_pilihan' => $validated['jumlah_pilihan'] ?? null,
            'gambar' => $linkGambar ?? 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1170&auto=format&fit=crop',
        ]);

        // Menyihir Pivot Table: Jika itu paket dan ada varian yg dicentang, gabungkan!
        if ($validated['tipe'] === 'paket' && !empty($validated['package_items'])) {
            $product->packageItems()->attach($validated['package_items']);
        }

        return redirect()->route('products')->with('success', 'Produk berhasil ditambahkan!');
    }
}

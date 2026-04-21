<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = [
        'kode_produk',
        'nama',
        'harga',
        'stok',
        'deskripsi',
        'is_active',
        'is_favorite',
        'is_new',
        'tipe',
        'kategori',
        'gambar',
        'jumlah_pilihan',
    ];

    /**
     * Jika produk ini adalah Paket, ini adalah relasi untuk melihat donat apa saja
     * yang boleh dipilih oleh pelanggan ke dalam paket ini.
     */
    public function packageItems()
    {
        return $this->belongsToMany(
            Product::class,
            'package_items',
            'package_id',
            'product_id'
        );
    }
    public function stocks()
    {
        // Relasi ke tabel branch_stocks
        return $this->hasMany(BranchStock::class);
    }

    // Function helper untuk ambil stok di cabang tertentu
    public function getStockInBranch($branchId)
    {
        $branchStock = $this->stocks()->where('branch_id', $branchId)->first();
        return $branchStock ? $branchStock->stock : 0;
    }
}

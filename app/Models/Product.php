<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $fillable = [
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
}
